const specialNum = () => {
    let cache = {}
    return name => {
      if (cache[name]) {
        return cache[name]
      }
      console.log('Generating special number...') // To represent this process taking time
      const rand = Math.floor(Math.random() * 3 + 1)
      cache[name] = rand
      return rand
    }
  }
  
  const generateSecretNum = specialNum()
  
  const specialNumBrian = generateSecretNum('brian')
  const specialNumPiper = generateSecretNum('piper')
  
  console.log(specialNumBrian) // Will generate, since it's the first time.
  console.log(specialNumPiper) // Will generate, since it's the first time.
  console.log(specialNumBrian) // Returns cached value.
  console.log(specialNumPiper) // Returns cached value.
  
  // Like above, we only get "Generating secret..." the first time. 
  // The key difference here is, our cache variable is protected 
  // inside of our closure and can't be accessed 
  // from the outside.