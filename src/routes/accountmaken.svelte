<script>
import { supabase } from '$lib/supabaseClient';
let email;
let password;
let antwoord={};

const accountMaken = async () =>{
 let reply  = await supabase.auth.signUp({
  email: email,
  password: password
})
console.log('error', reply.error)
console.log('user', reply.user)

}
</script>




<div class="container pt-20 mx-auto">
    <h1 class='text-xl'>account maken</h1>
<label for="email">email adres</label>
<input type="email" placeholder="iemand@bedrijf.nl" bind:value={email}/>

<label for="password">email adres</label>
<input type="text" placeholder="geheim!" bind:value={password}/>

<button on:click={accountMaken}>ok!</button>

</div>

<div>


</div>