const helpers = {
  toggleClass: function (options = {}, callback = {}) {
    const {
      triggerSelector,
      eTargetSelector,
      toggleClass = 'active',
      triggerToggle = false,
    } = options;

    // const { func, arg1, arg2 } = callback;

    const trigger = document.querySelector(triggerSelector);
    // console.log(container);

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const target = document.querySelector(eTargetSelector);

      if (!target) return;
      target.classList.toggle(toggleClass);

      if (!triggerToggle) return;
      trigger.classList.toggle(toggleClass);

      // if (1) {
      //   // console.log(arg1, arg2);
      //   func();
      //   // console.log(func());
      //   // func(arg1, arg2);
      //   // cb()
      //   // let wrapper = (cb, ...args) => {
      //   //   cb(...args);
      //   // };
      // }
    });
  },
  bodyLock: function (lockSelector) {
    // console.log('locked');
    // const body = document.body;
    const selector = document.querySelector(lockSelector);
    if (selector) {
      console.log(selector);
      // body.style.overflow('hidden');
    }
  },
};

export const toggleClass = helpers.toggleClass;
export const bodyLock = helpers.bodyLock;
