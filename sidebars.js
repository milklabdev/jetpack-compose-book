

const sidebars = {

  docs: [
    'index',
    {
      type: 'category',
      label: '入门',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        'installation',
        'tutorial'
      ]
    },
    {
      type: 'category',
      label: '基础组件',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'elements'
        }
      ]
    },
    {
      type: 'category',
      label: '布局组件',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'layout'
        }
      ]
    }
  ],

  opensourceProject: [
    {
      type: 'autogenerated',
      dirName: 'open-source-project'
    }
  ]

};

module.exports = sidebars;
