const Singleton = (() => {
  let instance;

  createInstanse = () => {
    const object = new Object({ name: 'Amin' });
    return object;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstanse();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB);
