<script>

import  {supabase}  from '$lib/supabaseClient';


let naam;
let leeftijd;
let inlezen=false;


async function tonen(){
    let {data,error} = await supabase.from('personen').select();
    return data;
   };

let promise = tonen();


const invoeren = async () =>{
    await supabase.from('personen')
        .insert({Naam:naam, Leeftijd:leeftijd})
    naam="";
    leeftijd="";
};
    

function ophalen() {
    promise = tonen();
}

function weergeven(){
    invoeren();
}


</script>



<input type="text" placeholder="naam" bind:value={naam}/>
<input type="number" placeholder="leeftijd" bind:value="{leeftijd}"/>
<input type="button" on:click={invoeren} value="versturen"/>

<input type="button" on:click={ophalen} value="tonen"/>


<div>
    {#if promise}
    {#await promise}
        <p>Loading...</p>
    {:then data}
        {#each data as user}
        <p>Name is {user.Naam}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    {/if}
    </div>
