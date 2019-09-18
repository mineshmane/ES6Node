function else_throw( fn, msg ){
    return async (...args) => fn(...args).catch(e => Error(`${msg} caused by: ${e}`));
  }
  
  function getUser() {
    return new Promise((resolve, reject) => {
      reject(new Error('An error occured'));
    });
  }
  
  async function test() {
    let _gu = getUser;
    let _getUser = else_throw(_gu, 'Could not fetch user details');
  
    console.log(await getUser());
  }
  
  test();