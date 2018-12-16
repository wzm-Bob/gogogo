import Mock from 'mockjs'
import {
  param2Obj
} from "../utils";
export const treeData = Mock.mock('/api/tree', 'get', (req, res) => {
  /*  没有携带参数的不必正则匹配 */
  return [{
    id: 1,
    pid: 0,
    name: "秣兵历马",
    open: false,
    nocheck: false,
    children: [{
        id: 11,
        pid: 1,
        name: "万夫之勇",
        children: [{
            id: 111,
            pid: 11,
            name: "梦回大唐"
          },
          {
            id: 112,
            pid: 11,
            name: "绝世枭雄"
          },
          {
            id: 113,
            pid: 11,
            name: "权势滔天"
          }
        ]
      },
      {
        id: 12,
        pid: 1,
        name: "首当其冲",
        open: false,
        children: [{
            id: 121,
            pid: 12,
            name: "万剑归宗"
          },
          {
            id: 122,
            pid: 12,
            name: "龙虎争霸"
          },
          {
            id: 123,
            pid: 12,
            name: "睥睨万物"
          }
        ]
      },
      {
        id: 13,
        pid: 1,
        name: "霸天绝地",
        open: false,
        children: [{
            id: 100,
            pid: 2,
            name: "审核管理",
            open: false,
            children: [{
                id: 1000,
                pid: 100,
                name: "用工审核"
              },
              {
                id: 1001,
                pid: 100,
                name: "商家审核"
              },
              {
                id: 1002,
                pid: 100,
                name: "机构审核"
              }
            ]
          },
          {
            id: 131,
            pid: 13,
            name: "气吞山河"
          },
          {
            id: 132,
            pid: 13,
            name: "百步穿杨"
          },
          {
            id: 133,
            pid: 13,
            name: "一鼓作气"
          }
        ]
      },
      {
        id: 15,
        pid: 1,
        name: "公司管理",
        open: false,
        children: [{
            id: 1517,
            pid: 15,
            name: "我的工程案例"
          },
          {
            id: 1518,
            pid: 15,
            name: "联系人设置"
          },
          {
            id: 1519,
            pid: 15,
            name: "广告设置"
          }
        ]
      },
      {
        id: 16,
        pid: 1,
        name: "业务管理",
        open: false,
        children: [{
            id: 164,
            pid: 16,
            name: "合同范本"
          },
          {
            id: 165,
            pid: 16,
            name: "合同列表"
          },
          {
            id: 166,
            pid: 16,
            name: "需求调度"
          }
        ]
      },
      {
        id: 17,
        pid: 1,
        name: "订单管理",
        open: false,
        children: [{
            id: 171,
            pid: 17,
            name: "商品订单"
          },
          {
            id: 172,
            pid: 17,
            name: "用工订单"
          },
          {
            id: 175,
            pid: 17,
            name: "供应菜单"
          }
        ]
      }
    ]
  }]

  //}
})
export const menuData = Mock.mock(/\/api\/menu/, 'get', (config) => {
  /* 路径用正则匹配 千万别用引号哦 */
  const list = [{
      name: "氣吞山河",
      path: "/dashboard/analysis",
      icon: "index-item-bg-jcxx",
      difcls: "jcxx",
      id: 1,
      open: true
    },
    {
      name: "冠世無雙",
      path: "/dashboard/monitor",
      icon: "index-item-bg-tzgg",
      difcls: "wtcl",
      id: 2,
      open: false
    },
    {
      name: "走馬觀花",
      path: "/dashboard/workplace",
      icon: "index-item-bg-wtcz",
      difcls: "gzrz",
      id: 3,
      open: false
    },
    {
      name: "龍吟九霄",
      path: "/list/excel",
      icon: "index-item-bg-xxbs",
      difcls: "tzgg",
      id: 4,
      open: false
    },
    {
      name: "策馬揚鞭",
      path: "/list/table",
      icon: "index-item-bg-gzrz",
      difcls: "xxbs",
      id: 5,
      open: false
    },
    {
      name: "霸絕天下",
      path: "/dashboard/monitor",
      icon: "index-item-bg-zhzx",
      difcls: "xtgl",
      id: 6,
      open: false
    },
    {
      name: "捨我其誰",
      path: "/dashboard/monitor",
      icon: "index-item-bg-gzrz",
      difcls: "xxbs",
      id: 7,
      open: false
    },
    {
      name: "君臨天下",
      path: "/dashboard/workplace",
      icon: "index-item-bg-tzgg",
      difcls: "wtcl",
      id: 8,
      open: false
    }
  ]
  const {
    id
  } = param2Obj(config.url)
  const ID = parseInt(id)
  for (let item of list) {

    if (ID !== 0) {
      if (item.id === ID) {
        return item
      }
    } else {
      return list
    }
  }

})
export const currmenuData = Mock.mock(/\/api\/currmenu/, 'get', (config) => {
  /* 路径用正则匹配 千万别用引号哦 */
  const list = [{
      name: "氣吞山河",
      path: "/dashboard/analysis",
      icon: "index-item-bg-jcxx",
      difcls: "jcxx",
      id: 1,
      open: false
    },
    {
      name: "冠世無雙",
      path: "/dashboard/monitor",
      icon: "index-item-bg-tzgg",
      difcls: "wtcl",
      id: 2,
      open: false
    },
    {
      name: "走馬觀花",
      path: "/dashboard/workplace",
      icon: "index-item-bg-wtcz",
      difcls: "gzrz",
      id: 3,
      open: false
    },
    {
      name: "龍吟九霄",
      path: "/list/excel",
      icon: "index-item-bg-xxbs",
      difcls: "tzgg",
      id: 4,
      open: false
    },
    {
      name: "策馬揚鞭",
      path: "/list/table",
      icon: "index-item-bg-gzrz",
      difcls: "xxbs",
      id: 5,
      open: false
    },
    {
      name: "霸絕天下",
      path: "/dashboard/monitor",
      icon: "index-item-bg-zhzx",
      difcls: "xtgl",
      id: 6,
      open: false
    },
    {
      name: "捨我其誰",
      path: "/dashboard/change",
      icon: "index-item-bg-gzrz",
      difcls: "xxbs",
      id: 7,
      open: false
    },
    {
      name: "君臨天下",
      path: "/dashboard/workplace",
      icon: "index-item-bg-tzgg",
      difcls: "wtcl",
      id: 8,
      open: false
    }
  ]
  const {
    id
  } = param2Obj(config.url)
  if (id === undefined || id === null || id === '') {
    list[0].open = true
    return list
  } else {
    const ID = parseInt(id)
    for (let item of list) {
      item.open = false
      if (item.id === ID) {
        item.open = true
        return list
      }

    }
  }
})