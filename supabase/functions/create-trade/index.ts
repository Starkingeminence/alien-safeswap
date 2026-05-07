import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { Keypair } from "https://esm.sh/@solana/web3.js@1.78.3"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // This handles the "pre-flight" request from your browser
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { seller_address, alien_amount, sol_price } = await req.json()

    // 1. Generate the unique escrow wallet
    const tempWallet = Keypair.generate();
    const escrow_address = tempWallet.publicKey.toBase58();
    const escrow_private_key = JSON.stringify(Object.values(tempWallet.secretKey));

    // 2. Connect to Supabase
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 3. Save the trade
    const { data, error } = await supabase
      .from('trades')
      .insert([{ 
        seller_address, 
        alien_amount, 
        sol_price, 
        escrow_address, 
        escrow_private_key,
        status: 'waiting_for_alien' 
      }])
      .select()

    if (error) throw error

    return new Response(JSON.stringify(data[0]), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200 
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400 
    })
  }
})