The proposal behind the idea is to have a single command `frontend c` that recieve as the 1st argument the framework, 2nd the app name and the following args are the ones to the original CLI.

Example:

- `frontend c vue appname -d` ->  vue create 
- `frontend c angular appname` -> ng new angular-tour-of-heroes
- `frontend c svelte appname` -> npm create svelte@latest 
- `frontend c react appname` -> uses next as default as in the react docs -> npx create-next-app
- `frontend c nuxt appname` -> npx nuxi init appname
