/*
    1.标签模板的使用
 */
    let lessons = [
        { title: "媒体查询响应式布局" },
        { title: "FLEX 弹性盒模型" },
        { title: "GRID 栅格系统" }
      ];

    function link(strings, ...vars){console.log('字符串内容', strings);console.log('对象内容',vars)};
    link`${lessons[0].title}` //=> 字符串内容 (2) ["", "", raw: Array(2)]    对象内容 ["媒体查询响应式布局"]

    function links(strings, ...vars){return `这个是新的内容${strings},加上这个${vars}`}
    const about = links`传入${lessons[0]}`
    about //=>"这个是新的内容传入,,加上这个[object Object]"

    let ss = {t: '000', a:'9999'}
    `${ss}` //=> "[object Object]"
    `${ss.a}` //=> "9999"

    let data = ['000', '999'];
    `${data}` //=> 000,999