 import Mock from 'mockjs';
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
             data: [
                {
                    id: 1,
                    licNumber: '甘肃',
                    color: 1,
                    buyTime: '2017-04-01'

                }, {
                    id: 1,
                    licNumber: '宁夏',
                    color: 1,
                    buyTime: '2017-04-01'

                }
             ],
             message: '查询成功'
         }
     })

 export default {
     vehicle,
     user
 }