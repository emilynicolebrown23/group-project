NEVER START CODING IN THE MASTER COPY. 


When you're ready to start coding, make sure you take the following steps. It doesnt matter where you are in the terminal. Type the following:

    - git branch server-start -   
        (doesnt have to be server-start, it can be serverjs-start frontend-start, or routes-start, model, start, whichever branch you're going to work in. )

    - git checkout server-start

When you're done coding in your branch and it's ready to become part of the master:

    - git add -A
    - git status
    - git commit -m "server boiler plate complete"
    - git push --set-upstream origin server-start
