import Mock from 'mockjs'
export const tableData = Mock.mock(/\/api\/table/, 'get', (config) => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            name: "Business" + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            portrayal: ["City", "People", "Cost", "Life", "Entertainment"],
            people: [{
                    n: "People" + Math.floor(Math.random() * 100 + 1),
                    c: Math.floor(Math.random() * 1000000 + 100000)
                },
                {
                    n: "People" + Math.floor(Math.random() * 100 + 1),
                    c: Math.floor(Math.random() * 1000000 + 100000)
                },
                {
                    n: "People" + Math.floor(Math.random() * 100 + 1),
                    c: Math.floor(Math.random() * 1000000 + 100000)
                }
            ],
            time: Math.floor(Math.random() * 7 + 1),
            update: new Date()
        });
    }
    return data;
})
 