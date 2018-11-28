import Mock from 'mockjs'
export const tableData = Mock.mock(/\/api\/table/, 'get', (config) => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            name: "瑶瑶" + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            portrayal: ["城市", "人类", "花费", "生活", "环境"],
            people: [{
                    n: "人类" + Math.floor(Math.random() * 100 + 1),
                    c: Math.floor(Math.random() * 1000000 + 100000)
                },
                {
                    n: "人类" + Math.floor(Math.random() * 100 + 1),
                    c: Math.floor(Math.random() * 1000000 + 100000)
                },
                {
                    n: "人类" + Math.floor(Math.random() * 100 + 1),
                    c: Math.floor(Math.random() * 1000000 + 100000)
                }
            ],
            time: Math.floor(Math.random() * 7 + 1),
            update: new Date(2020, 1, 1)
        });
    }
    return data;
})
 