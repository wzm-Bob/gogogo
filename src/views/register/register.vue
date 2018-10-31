<template>
    <div class="left-menu">
        <Tree :data="baseData"></Tree>
        <!-- <Tree :data="ThematicData" @on-select-change="OnSelectChange" ref="ThematicTree"></Tree> -->

    </div>

</template>
<script >
/* 展开、选中、勾选和禁用 expand、selected、checked 和 disabled 属性 multiple 可进行多选 */
export default {
  data() {
    return {
      baseData: []
    };
  },
  methods: {
    getTree() {
      var start = new Date().getTime(); //起始时间
      //准备数据
      let testData = {
        department: [
          {
            departmentName: "四川省",
            parentId: "100",
            id: "510000000000",
            open: true
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '凉山彝族自治州<span style="color: #333333;">(49.07万人)</span>',
            parentId: "510000000000",
            id: "513400000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '达州市<span style="color: #333333;">(19.98万人)</span>',
            parentId: "510000000000",
            id: "511700000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '巴中市<span style="color: #333333;">(13.58万人)</span>',
            parentId: "510000000000",
            id: "511900000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '宜宾市<span style="color: #333333;">(10.08万人)</span>',
            parentId: "510000000000",
            id: "511500000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '广元市<span style="color: #333333;">(9.74万人)</span>',
            parentId: "510000000000",
            id: "510800000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '泸州市<span style="color: #333333;">(9.08万人)</span>',
            parentId: "510000000000",
            id: "510500000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '南充市<span style="color: #333333;">(8.97万人)</span>',
            parentId: "510000000000",
            id: "511300000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '甘孜藏族自治州<span style="color: #333333;">(8.23万人)</span>',
            parentId: "510000000000",
            id: "513300000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '广安市<span style="color: #333333;">(7.32万人)</span>',
            parentId: "510000000000",
            id: "511600000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '资阳市<span style="color: #333333;">(6.6万人)</span>',
            parentId: "510000000000",
            id: "512000000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '遂宁市<span style="color: #333333;">(4.9万人)</span>',
            parentId: "510000000000",
            id: "510900000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '乐山市<span style="color: #333333;">(4.52万人)</span>',
            parentId: "510000000000",
            id: "511100000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '绵阳市<span style="color: #333333;">(4.47万人)</span>',
            parentId: "510000000000",
            id: "510700000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '内江市<span style="color: #333333;">(4.18万人)</span>',
            parentId: "510000000000",
            id: "511000000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '自贡市<span style="color: #333333;">(3.61万人)</span>',
            parentId: "510000000000",
            id: "510300000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '阿坝藏族羌族自治州<span style="color: #333333;">(2.19万人)</span>',
            parentId: "510000000000",
            id: "513200000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '德阳市<span style="color: #333333;">(2.12万人)</span>',
            parentId: "510000000000",
            id: "510600000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '眉山市<span style="color: #333333;">(1.12万人)</span>',
            parentId: "510000000000",
            id: "511400000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '雅安市<span style="color: #333333;">(8130人)</span>',
            parentId: "510000000000",
            id: "511800000000"
          },
          {
            isParent: "true",
            iconSkin: null,
            departmentName:
              '攀枝花市<span style="color: #333333;">(7019人)</span>',
            parentId: "510000000000",
            id: "510400000000"
          }
        ]
      };
      var data = testData.department;
      let treedata = [];
      //查找最顶层
      let len = data.length;
      for (let j = 0; j < len; j++) {
        data[j].expand = false;
        data[j].title = data[j].departmentName;
        if (data[j].parentId == "100") {
          treedata.push({
            expand: true,
            title: data[j].departmentName,
            id: data[j].id
          });
        }
      }
      //找到跟最高层id相关的子子孙孙，并给子孙添加lev
      var treedataLevs = [];
      for (let h = 0, ls = treedata.length; h < ls; h++) {
        treedataLevs.push({
          treedataLev: sonsTree(data, treedata[h].id)
        });
      }
      console.log(treedataLevs);
      for (let p = 0, lq = treedataLevs.length; p < lq; p++) {
        var treedataLev = treedataLevs[p].treedataLev;
        //找到最高层的lev
        var maxLev = 0;
        for (let i = 0, lt = treedataLev.length; i < lt; i++) {
          if (parseInt(treedataLev[i].lev) > maxLev) {
            maxLev = parseInt(treedataLev[i].lev);
          } else {
            maxLev = maxLev;
          }
        }
        //比较当前层和上一层的数据，然后做处理
        var needLev = maxLev;
        var maxLevTree = [];
        var maxLevTreePrev = [];
        for (let m = 0; m < maxLev; m++) {
          maxLevTree = getLevArr(treedataLev, needLev);
          maxLevTreePrev = getLevArr(treedataLev, needLev - 1);
          for (var j = 0, lp = maxLevTreePrev.length; j < lp; j++) {
            maxLevTreePrev[j].children = new Array();
            for (var i = 0, lm = maxLevTree; i < lm.length; i++) {
              if (maxLevTree[i].parentId == maxLevTreePrev[j].id) {
                maxLevTreePrev[j].children.push(maxLevTree[i]);
              }
            }
          }
          needLev--;
        }
        treedata[p].children = maxLevTreePrev;
      }

      this.baseData = treedata;
      //找出同一级的数据
      function getLevArr(arr, lev) {
        var newarr = [];
        for (let i = 0, la = arr.length; i < la; i++) {
          //这里对arr 的children 做处理
          arr.children = new Array();
          if (parseInt(arr[i].lev) == lev) {
            newarr.push(arr[i]);
          }
        }
        return newarr;
      }
      //给每个数据添加一个lev
      function sonsTree(arr, id) {
        var temp = [],
          lev = 0;
        var forFn = function(arr, id, lev) {
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.parentId == id) {
              item.lev = lev;
              temp.push(item);
              forFn(arr, item.id, lev + 1);
            }
          }
        };
        forFn(arr, id, lev);
        return temp;
      }
      var end = new Date().getTime(); //结束时间
      console.log("Tree初始化的时间是" + (end - start) + "ms"); //返回函数执行需要时间
    }
  },
  created: function() {
    this.getTree();
  }
};
</script>
 
<style type="text/css">
.user-defined-tree {
  background-color: #333;
}
.ivu-tree ul {
  font-size: 14px;
  text-align: left;
}
/* ivu-tree-arrow 
ivu-tree-arrow-open
*/
.left-menu {
  border: 1px solid #ccc;
  padding: 10px 5px 30px 15px;
}
</style>


