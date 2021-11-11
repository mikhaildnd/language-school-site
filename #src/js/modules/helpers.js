const helpers = {
  toggleClass: function (options = {}) {
    const {
      triggerSelector,
      eTargetSelector,
      toggleClass = 'active',
      triggerToggle = false,
    } = options;

    const trigger = document.querySelector(triggerSelector);
    // console.log(container);

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const target = document.querySelector(eTargetSelector);

      if (!target) return;
      target.classList.toggle(toggleClass);

      if (!triggerToggle) return;
      trigger.classList.toggle(toggleClass);
    });
  },
};

export const toggleClass = helpers.toggleClass;
