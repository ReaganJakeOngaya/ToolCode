import React from 'react'


function Home() {
  return (
    <div style={{justifyContent:"center", padding:"100px", borderRadius:"10px", background:"gray", height:"62vh"}}>
        <h3>ToolCode</h3>
        <img src='https://img.icons8.com/?size=100&id=60998&format=png&color=000000' alt='logo' />
    

        <div class="d-grid gap-2 col-4 mx-auto p-20">
            <a href="/login" class="btn btn-primary" role="button" data-bs-toggle="button">Login</a>
            <a href="/signup" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Sign Up </a>
        </div>
    </div>
  )
}

export default Home