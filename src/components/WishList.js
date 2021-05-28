import React, {useState,useEffect} from 'react'

/* 
When thinking about a component
1. Is this component going to have its own state? Yes > useState
2. My component may or may not have proprs but I want to pass props down anyway.
******** PROPS is an object that holds data from its parent ********
3. Is this component going to have an API? Yes > useEffect
4. If I'm going to update anything in a form, I know I will need to use > onSubmit
5. Also, I will need to make a function that handles that submit!

*/