import React from 'react'
import StudentCard from './components/StudentCard'

function App()
 {

  function Greeting({name,isLoggedIn})
  {
       return (
    <div>
       <h1>Hello {name}</h1>
       {isLoggedIn ? 
       (
         <p>Welcome back!</p>
       )
        :
       (
         <p> {name} kindly login the system</p>
       )
       }
     </div>
   )

  }

 function Notification({ hasMessage, message , count })
  {
   return (
     <div>
       {hasMessage && <p>{message}</p>}

       <p>Inbox Messages:</p>
       <p>-----------------</p>
        {count > 2 && <p>You have {count} new messages</p>}

     </div>
  );
 }

  return (
    

    <>
      {/* <section>
           <h1>Data sharing using Props</h1>

      <StudentCard name="meena" course="FSD" score="95"/>
       <StudentCard name="Arun" course="React" score="66" />
      <StudentCard name="Divya" course="Python" score="45" />
      </section> */}

       <div>
       <Greeting name="Meenal" isLoggedIn={true} />
       <Greeting name="Rahul" isLoggedIn={false} />
       <Greeting name="Sindhu" isLoggedIn={true} />
       <Greeting name="Ramki" isLoggedIn={false} />
       </div>

        <section>
              <Notification hasMessage={true} message="New email received!" count={5} />
            <Notification hasMessage={true} message="New assignment uploaded!" count={3} />
            <Notification hasMessage={true} message="You can see it" count={2} />

        </section>
     

    </>
  )
}

export default App