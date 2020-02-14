{
  $: [
    {
      type: 'list',
      name: 'initWith',
      message: `Choose Documentation initialization type:`,
      choices: [
        'Default',
        'LCU'
      ]
    },
    {
      type: 'confirm',
      name: 'includeComponent',
      message: `Do you want to include the component files necessary for displaying the documentation?`,
      default: false
    },
    {
      type: 'confirm',
      name: 'includeRouting',
      message: `Do you want to include a route for the new documentation component?`,
      default: false,
      when: (answers) => {
        return answers.includeComponent;
      }
    }
  ]
}