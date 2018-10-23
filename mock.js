import Mock from 'mockjs'

const Random = Mock.Random

var listData = function () {
    let _data = []
    for (let i = 0; i < 20; i++) {
        let newList = { // 详细 规则 参照mockjs官网
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            imgSrc: Random.dataImage('200x160', '这是图片中的文本'), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
            author_name: Random.cname(), // Random.cname() 随机生成中文名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        _data.push(newList)
    }
    return {
        _data: _data
    }
}
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('http://route.showapi.com/60-27', 'post', listData)