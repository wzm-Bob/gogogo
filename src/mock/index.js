 import Mock from 'mockjs';
 // import treeData from './list'
 const login = Mock.mock(
     '/login/login', 'post', (req, res) => {
         const {
             password,
             user,
             // type
         } = JSON.parse(req.body);

         if (password === '888888' && user === 'admin') {
             return {
                 status: 'ok',
                 token: 'admin',
                 roles: ['admin'],
                 currentAuthority: 'admin',
                 introduction: '超级管理员',
             }
         }
         if (password === '123456' && user === 'user') {
             return {
                 status: 'ok',
                 token: 'user',
                 roles: ['user'],
                 currentAuthority: 'user',
                 introduction: '普通用户',
             }
         }
         if (password === '1234' && user === '17797592879') {
             return {
                 status: 'ok',
                 token: 'user',
                 roles: ['user'],
                 currentAuthority: 'user',
                 introduction: '普通用户',
             }
         }
         return {
             status: 'error',
             currentAuthority: 'guest',
         }
     })
 const vehicle = Mock.mock(
     '/api/vehicle', 'post', (req, res) => {
         return {
             code: 200,
             data: [{
                 id: 1,
                 licNumber: '陕A79898',
                 color: 1,
                 buyTime: '2017-04-01'

             }, {
                 id: 1,
                 licNumber: '陕A79898',
                 color: 1,
                 buyTime: '2017-04-01'

             }],
             message: '查询成功'
         }
     })
 const user = Mock.mock(
     '/api/user', 'get', (req, res) => {
         return {
             code: 200,
             data: [{
                 id: 1,
                 licNumber: '甘肃',
                 color: 1,
                 buyTime: '2017-04-01'

             }, {
                 id: 1,
                 licNumber: '宁夏',
                 color: 1,
                 buyTime: '2017-04-01'

             }],
             message: '查询成功'
         }
     })
     const treeData = Mock.mock('/api/tree', 'get', (req, res) => {
       /*  const {
            id
        } = JSON.parse(req.body); */
       // if (id < 10) {
            return [
                {
                  id: 1,
                  pid: 0,
                  name: "秣兵历马",
                  open: false,
                  nocheck: false,
                  children: [
                    {
                      id: 11,
                      pid: 1,
                      name: "万夫之勇",
                      children: [
                        { id: 111, pid: 11, name: "梦回大唐" },
                        { id: 112, pid: 11, name: "绝世枭雄" },
                        { id: 113, pid: 11, name: "权势滔天" }
                      ]
                    },
                    {
                      id: 12,
                      pid: 1,
                      name: "首当其冲",
                      open: false,
                      children: [
                        { id: 121, pid: 12, name: "万剑归宗" },
                        { id: 122, pid: 12, name: "龙虎争霸" },
                        { id: 123, pid: 12, name: "睥睨万物" }
                      ]
                    },
                    {
                      id: 13,
                      pid: 1,
                      name: "霸天绝地",
                      open: false,
                      children: [
                        {
                          id: 100,
                          pid: 2,
                          name: "审核管理",
                          open: false,
                          children: [
                            { id: 1000, pid: 100, name: "用工审核" },
                            { id: 1001, pid: 100, name: "商家审核" },
                            { id: 1002, pid: 100, name: "机构审核" }
                          ]
                        },
                        { id: 131, pid: 13, name: "气吞山河" },
                        { id: 132, pid: 13, name: "百步穿杨" },
                        { id: 133, pid: 13, name: "一鼓作气" }
                      ]
                    },
                    {
                      id: 15,
                      pid: 1,
                      name: "公司管理",
                      open: false,
                      children: [
                        { id: 1517, pid: 15, name: "我的工程案例" },
                        { id: 1518, pid: 15, name: "联系人设置" },
                        { id: 1519, pid: 15, name: "广告设置" }
                      ]
                    },
                    {
                      id: 16,
                      pid: 1,
                      name: "业务管理",
                      open: false,
                      children: [
                        { id: 164, pid: 16, name: "合同范本" },
                        { id: 165, pid: 16, name: "合同列表" },
                        { id: 166, pid: 16, name: "需求调度" }
                      ]
                    },
                    {
                      id: 17,
                      pid: 1,
                      name: "订单管理",
                      open: false,
                      children: [
                        { id: 171, pid: 17, name: "商品订单" },
                        { id: 172, pid: 17, name: "用工订单" },
                        { id: 175, pid: 17, name: "供应菜单" }
                      ]
                    }
                  ]
                }
              ] 
    
        //}
    })
 export default {
     vehicle,
     user,
     login,
     treeData
 }