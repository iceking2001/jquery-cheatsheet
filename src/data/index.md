---
layout: layout.html

versions:
  - name:  "1.0"
    value: "1.0"
    source: ""

  - name:  "1.0.4"
    value: "1.0.4"
    source: ""

  - name:  "1.1"
    value: "1.1"
    source: ""

  - name:  "1.1.2"
    value: "1.1.2"
    source: ""

  - name:  "1.1.3"
    value: "1.1.3"
    source: ""

  - name:  "1.1.3"
    value: "1.1.3"
    source: ""

  - name:  "1.2"
    value: "1.2"
    source: ""

  - name:  "1.2.3"
    value: "1.2.3"
    source: ""

  - name:  "1.2.6"
    value: "1.2.6"
    source: "1.2.6"

  - name:  "1.3"
    value: "1.3"
    source: "1.3.2"

  - name:  "1.4"
    value: "1.4"
    source: "1.4.1"

  - name:  "1.4.1"
    value: "1.4.1"
    source: "1.4.1"

  - name:  "1.4.2"
    value: "1.4.2"
    source: "1.4.2"

  - name:  "1.4.3"
    value: "1.4.3"
    source: "1.4.3"

  - name:  "1.4.4"
    value: "1.4.4"
    source: "1.4.3"

  - name:  "1.5"
    value: "1.5"
    source: "1.5"

  - name:  "1.6"
    value: "1.6"
    source: "1.6.2"

  - name:  "1.7"
    value: "1.7"
    source: "1.7.2"

  - name:  "1.8"
    value: "1.8"
    source: "1.8.3"

  - name:  "1.9"
    value: "1.9"
    source: "1.9.1"

  - name:  "1.10 / 2.0"
    value: "1.10"
    source: "2.0.3"

  - name:  "3.0"
    value: "3.0"
    source: "git"

selectors:
  title: 选择器
  slug: selectors
  sections:

    - title: 基本
      items:

        - text: "*"
          title: 选择所有元素。
          doc: all-selector
          from: "1.0"

        - text: .class
          title: 选择给定类的所有元素。
          doc: class-selector
          from: "1.0"

        - text: element
          title: 选择具有给定标签名称的所有元素。
          doc: element-selector
          from: "1.0"

        - text: "#id"
          title: 选择具有给定id属性的单个元素。
          doc: id-selector
          from: "1.0"

        - text: "selector1, selectorN, ..."
          title: 选择所有指定选择器的组合结果。
          doc: multiple-selector
          from: "1.0"

    - title: 层级
      items:

        - text: "parent &gt; child"
          title: 选择由'parent'指定的元素由'child'指定的所有直接子元素。
          doc: child-selector
          from: "1.0"

        - text: ancestor descendant
          title: 选择作为给定祖先的后代的所有元素。
          doc: descendant-selector
          from: "1.0"

        - text: prev + next
          title: 选择所有匹配“next”的下一个元素，它们紧跟在同一个“prev”之前。
          doc: next-adjacent-Selector
          from: "1.0"

        - text: prev ~ siblings
          title: “选择”prev“元素后面的所有同胞元素，具有相同的父项，并且匹配过滤”兄弟“选择符。
          doc: next-siblings-selector
          from: "1.0"

    - title: 基本筛选
      autosort: true
      items:

        - text: :animated
          title: 选择运行时选择动画进度中的所有元素。
          doc: animated-selector
          from: "1.2"

        - text: :eq()
          title: 选择匹配集中的索引n处的元素。
          doc: eq-selector
          from: "1.0"

        - text: :even
          title: “选择偶数元素，零索引，另见奇数”。
          doc: even-selector
          from: "1.0"

        - text: :first
          title: 选择第一个匹配的元素。
          doc: first-selector
          from: "1.0"

        - text: :gt()
          title: 选择匹配集中大于索引的索引的所有元素。
          doc: gt-selector
          from: "1.0"

        - text: :header
          title: “选择标题的所有元素，如h1，h2，h3等。”
          doc: header-selector
          from: "1.2"

        - text: :lang()
          title: 选择指定语言的所有元素。
          doc: lang-selector
          from: "1.9"

        - text: :last
          title: 选择最后匹配的元素。
          doc: last-selector
          from: "1.0"

        - text: :lt()
          title: 选择匹配集中索引小于索引的所有元素。
          doc: lt-selector
          from: "1.0"

        - text: :not()
          title: 选择与给定选择器不匹配的所有元素。
          doc: not-selector
          from: "1.0"

        - text: :odd
          title: “选择奇数元素，零索引，参见even”。
          doc: odd-selector
          from: "1.0"

        - text: :root
          title: 选择作为文档根目录的元素。
          doc: root-selector
          from: "1.9"

        - text: :target
          title: 选择由文档URI的片段标识符指示的目标元素。
          doc: target-selector
          from: "1.9"

    - title: 内容筛选
      autosort: true
      items:

        - text: :contains()
          title: 选择包含指定文本的所有元素。
          doc: contains-selector
          from: "1.1.4"

        - text: :empty
          title: 选择所有没有子节点的元素（包括文本节点）。
          doc: empty-selector
          from: "1.0"

        - text: :has()
          title: 选择至少包含一个与指定选择器匹配的元素的元素。
          doc: has-selector
          from: "1.1.4"

        - text: :parent
          title: “选择所有作为另一个元素的父元素，包括文本节点”。
          doc: parent-selector
          from: "1.0"


    - title: 可见性筛选
      break: true
      autosort: true
      items:

        - text: :hidden
          title: 选择所有隐藏的元素。
          doc: hidden-selector
          from: "1.0"

        - text: :visible
          title: 选择所有可见的元素。
          doc: visible-selector
          from: "1.0"

    - title: 属性
      items:

        - text: '[name|="value"]'
          title: 选择具有指定属性的元素，其值等于给定字符串，或者以该字符串开头，后跟连字符（ - ）。
          doc: attribute-contains-prefix-selector
          from: "1.0"

        - text: '[name*="value"]'
          title: 选择具有指定属性的元素，其值包含给定的子字符串。
          doc: attribute-contains-selector
          from: "1.0"

        - text: '[name~="value"]'
          title: “选择具有指定属性的元素，其中包含给定单词的值，并以空格分隔。”
          doc: attribute-contains-word-selector
          from: "1.0"

        - text: '[name$="value"]'
          title: 选择具有指定属性的元素，其值将与给定的字符串完全一致。比较区分大小写。
          doc: attribute-ends-with-selector
          from: "1.0"

        - text: '[name="value"]'
          title: 选择具有与某个值完全相同的值的指定属性的元素。
          doc: attribute-equals-selector
          from: "1.0"

        - text: '[name!="value"]'
          title: “选择不具有指定属性的元素，或者具有指定属性但不具有某个值的元素”。
          doc: attribute-not-equal-selector
          from: "1.0"

        - text: '[name^="value"]'
          title: 选择具有指定属性的元素，该值具有与给定字符串完全一致的值。
          doc: attribute-starts-with-selector
          from: "1.0"

        - text: '[name]'
          title: “选择具有指定属性的元素，具有任何值”。
          doc: has-attribute-selector
          from: "1.0"

        - text: '[name="value"][name2="value2"]'
          title: 匹配所有指定的属性过滤器的元素。
          doc: multiple-attribute-selector
          from: "1.0"

    - title: 子元素筛选
      autosort: true
      items:

        - text: :first-child
          title: 选择所有的元素，它们是父代的第一个子节点。
          doc: first-child-selector
          from: "1.1.4"

        - text: :first-of-type
          title: 选择同一元素名称的兄弟姐妹中第一个的所有元素。
          doc: first-of-type-selector
          from: "1.9"

        - text: :last-child
          title: 选择所有作为父母最后一个孩子的元素。
          doc: last-child-selector
          from: "1.1.4"

        - text: :last-of-type
          title: 选择同一元素名称的兄弟姐妹中最后一个的所有元素。
          doc: last-of-type-selector
          from: "1.9"

        - text: :nth-child()
          title: 选择所有元素，它们是父项的第n个子节点。
          doc: nth-child-selector
          from: "1.1.4"

        - text: :nth-last-child()
          title: “选择所有的元素，它们是父元素的第n个子元素，从最后一个元素开始计数。
          doc: nth-last-child-selector
          from: "1.9"

        - text: :nth-last-of-type()
          title: “选择所有的元素，它们是父元素的第n个子元素，从最后一个元素开始计数。
          doc: nth-last-of-type-selector
          from: "1.9"

        - text: :nth-of-type()
          title: 选择与父元素的第n个子元素相关的元素名称相同的所有元素。
          doc: nth-of-type-selector
          from: "1.9"

        - text: :only-child
          title: 选择所有作为其父项的唯一子元素。
          doc: only-child-selector
          from: "1.1.4"

        - text: :only-of-type()
          title: 选择所有不具有相同元素名称的兄弟节点的元素。
          doc: only-of-type-selector
          from: "1.9"

    - title: 表单
      break: true
      autosort: true
      items:

        - text: :button
          title: 选择类型按钮的所有按钮元素和元素。
          doc: button-selector
          from: "1.0"

        - text: :checkbox
          title: 选择所有元素的复选框。
          doc: checkbox-selector
          from: "1.0"

        - text: :checked
          title: 匹配所有检查的元素。
          doc: checked-selector
          from: "1.0"

        - text: :disabled
          title: 选择所有禁用的元素。
          doc: disabled-selector
          from: "1.0"

        - text: :enabled
          title: 选择启用的所有元素。
          doc: enabled-selector
          from: "1.0"

        - text: :focus
          title: 选择元素，如果它是当前焦点。
          doc: focus-selector
          from: "1.6"

        - text: :file
          title: 选择文件类型的所有元素。
          doc: file-selector
          from: "1.0"

        - text: :image
          title: 选择图像类型的所有元素。
          doc: image-selector
          from: "1.0"

        - text: :input
          title: “选择所有输入，文本区域，选择和按钮元素”。
          doc: input-selector
          from: "1.0"

        - text: :password
          title: 选择密码类型的所有元素。
          doc: password-selector
          from: "1.0"

        - text: :radio
          title: 选择radio类型的所有元素。
          doc: radio-selector
          from: "1.0"

        - text: :reset
          title: 选择所有复位类型的元素。
          doc: reset-selector
          from: "1.0"

        - text: :selected
          title: 选择所有选中的元素。
          doc: selected-selector
          from: "1.0"

        - text: :submit
          title: 选择提交类型的所有元素。
          doc: submit-selector
          from: "1.0"

        - text: :text
          title: 选择文本类型的所有元素。
          doc: text-selector
          from: "1.0"

attributes:
  title: 属性 / CSS
  slug: attributes
  sections:

    - title: 属性
      autosort: true
      items:

        - text: .attr()
          title: 获取匹配元素集合中第一个元素的属性值，或为每个匹配元素设置一个或多个属性。
          doc: attr
          src: jQuery.fn.attr
          from: "1.0"

        - text: .prop()
          title: 获取匹配元素集合中第一个元素的属性值，或为每个匹配元素设置一个或多个属性。
          doc: prop
          src: jQuery.fn.prop
          from: "1.6"

        - text: .removeAttr()
          title: 从匹配元素集合中的每个元素中删除一个属性。
          doc: removeAttr
          src: jQuery.fn.removeAttr
          from: "1.0"

        - text: .removeProp()
          title: 删除一组匹配元素的属性。
          doc: removeProp
          src: jQuery.fn.removeProp
          from: "1.6"

        - text: .val()
          title: 获取匹配元素集合中第一个元素的当前值，或设置每个匹配元素的值。
          doc: val
          src: jQuery.fn.val
          from: "1.0"

    - title: CSS
      autosort: true
      items:

        - text: .addClass()
          title: 将指定的类添加到匹配元素的每一组中。
          doc: addClass
          src: jQuery.fn.addClass
          from: "1.0"

        - text: .css()
          title: 获取匹配元素集合中第一个元素的样式属性的值，或为每个匹配元素设置一个或多个CSS属性。
          doc: css
          src: jQuery.fn.css
          from: "1.0"

        - text: jQuery.cssHooks
          title: “提供了一种直接钩入jQuery的方法来覆盖特定的CSS属性的检索或设置。除了其他用途之外，还可以使用cssHooks为CSS3功能（如框阴影和渐变）创建自定义浏览器归一化的属性。
          doc: jQuery.cssHooks
          src: jQuery.cssHooks
          from: "1.4.3"

        - text: jQuery.cssNumber
          title: “包含可能没有单元的所有CSS属性的对象.css（）方法使用此对象来查看它是否可以将px附加到无单位值。”
          doc: jQuery.cssNumber
          src: jQuery.cssNumber
          from: "1.4.3"

        - text:  jQuery.escapeSelector()
          title: “在CSS选择器中转义具有特殊含义的任何字符”。
          doc: jQuery.escapeSelector
          src: jQuery.escapeSelector
          from: "3.0"

        - text: .hasClass()
          title: 确定是否有任何匹配的元素被分配给给定的类。
          doc: hasClass
          src: jQuery.fn.hasClass
          from: "1.2"

        - text: .removeClass()
          title: “从匹配元素集合中的每个元素中删除单个类，多个类或所有类。”
          doc: removeClass
          src: jQuery.fn.removeClass
          from: "1.0"

        - text: .toggleClass()
          title: “根据类的存在或切换参数的值，从匹配元素集合中的每个元素添加或删除一个或多个类。”
          doc: toggleClass
          src: jQuery.fn.toggleClass
          from: "1.0"

    - title: 尺寸
      break: true
      autosort: true
      items:

        - text: .height()
          title: 获取匹配元素集合中第一个元素的当前计算高度，或设置每个匹配元素的高度。
          doc: height
          src: jQuery.fn.height
          from: "1.0"

        - text: .innerHeight()
          title: “获取匹配元素集合中第一个元素的当前计算高度，包括填充但不是边框。
          doc: innerHeight
          src: jQuery.fn.innerHeight
          from: "1.2.6"

        - text: .innerWidth()
          title: “获取匹配元素集合中第一个元素的当前计算宽度，包括填充但不是边框。
          doc: innerWidth
          src: jQuery.fn.innerWidth
          from: "1.2.6"

        - text: .outerHeight()
          title: “获取匹配元素集合中第一个元素的当前计算高度，包括填充，边框和可选边距。”
          doc: outerHeight
          src: jQuery.fn.outerHeight
          from: "1.2.6"

        - text: .outerWidth()
          title: “获取匹配元素集合中第一个元素的当前计算宽度，包括填充和边框。
          doc: outerWidth
          src: jQuery.fn.outerWidth
          from: "1.2.6"

        - text: .width()
          title: 获取匹配元素集合中第一个元素的当前计算宽度，或设置每个匹配元素的宽度。
          doc: width
          src: jQuery.fn.width
          from: "1.0"

    - title: 位置
      autosort: true
      items:

        - text: .offset()
          title: “获取第一个元素的当前坐标，或设置相对于文档的匹配元素集合中每个元素的坐标。”
          doc: offset
          src: jQuery.fn.offset
          from: "1.2"

        - text: .offsetParent()
          title: 获取最接近的祖先元素。
          doc: offsetParent
          src: jQuery.fn.offsetParent
          from: "1.2.6"

        - text: .position()
          title: “获取匹配元素集合中相对于偏移父元素的第一个元素的当前坐标。
          doc: position
          src: jQuery.fn.position
          from: "1.2"

        - text: .scrollLeft()
          title: 获取匹配元素集合中第一个元素的滚动条的当前水平位置，或为每个匹配元素设置滚动条的水平位置。
          doc: scrollLeft
          src: jQuery.fn.scrollLeft
          from: "1.2.6"

        - text: .scrollTop()
          title: 获取匹配元素集合中第一个元素的滚动条的当前垂直位置，或为每个匹配元素设置滚动条的垂直位置。
          doc: scrollTop
          src: jQuery.fn.scrollTop
          from: "1.2.6"

    - title: 数据
      autosort: true
      items:

        - text: jQuery.data()
          title: 存储与指定元素关联的任意数据和/或返回设置的值。
          doc: jQuery.data
          src: jQuery.data
          from: "1.2.3"

        - text: .data()
          title: 存储与匹配元素相关联的任意数据，或返回匹配元素集合中第一个元素的命名数据存储中的值。
          doc: data
          src: jQuery.fn.data
          from: "1.2.3"

        - text: jQuery.hasData()
          title: 确定一个元素是否有与之相关联的任何jQuery数据。
          doc: jQuery.hasData
          src: jQuery.hasData
          from: "1.5"

        - text: jQuery.removeData()
          title: 删除以前存储的数据。
          doc: jQuery.removeData
          src: jQuery.removeData
          from: "1.2.3"

        - text: .removeData()
          title: 删除以前存储的数据。
          doc: removeData
          src: jQuery.fn.removeData
          from: "1.2.3"


manipulation:
  title: 操作
  slug: manipulation
  sections:

    - title: 拷贝
      autosort: true
      items:

        - text: .clone()
          title: 创建一组匹配元素的深层副本。
          doc: clone
          src: jQuery.fn.clone
          from: "1.0"

    - title: DOM 插入, 包裹
      autosort: true
      items:

        - text: .wrap()
          title: 在匹配元素集合中的每个元素周围包装一个HTML结构。
          doc: wrap
          src: jQuery.fn.wrap
          from: "1.0"

        - text: .wrapAll()
          title: 在一组匹配的元素中的所有元素周围包装一个HTML结构。
          doc: wrapAll
          src: jQuery.fn.wrapAll
          from: "1.2"

        - text: .wrapInner()
          title: 围绕一组匹配元素中的每个元素的内容包装一个HTML结构。
          doc: wrapInner
          src: jQuery.fn.wrapInner
          from: "1.2"

    - title: DOM 插入, 内部插入
      autosort: true
      items:

        - text: .append()
          title: “将参数指定的内容插入匹配元素集合中每个元素的末尾。”
          doc: append
          src: jQuery.fn.append
          from: "1.0"

        - text: .appendTo()
          title: 将匹配元素集中的每个元素插入目标的末尾。
          doc: appendTo
          src: jQuery.fn.appendTo
          from: "1.0"

        - text: .html()
          title: 获取匹配元素集合中第一个元素的HTML内容，或设置每个匹配元素的HTML内容。
          doc: html
          src: jQuery.fn.html
          from: "1.0"

        - text: .prepend()
          title: “将参数指定的内容插入到匹配元素集合中每个元素的开头。”
          doc: prepend
          src: jQuery.fn.prepend
          from: "1.0"

        - text: .prependTo()
          title: 将匹配元素集中的每个元素插入目标的开头。
          doc: prependTo
          src: jQuery.fn.prependTo
          from: "1.0"

        - text: .text()
          title: “获取匹配元素集合中每个元素的组合文本内容，包括其后代，或设置匹配元素的文本内容。
          doc: text
          src: jQuery.fn.text
          from: "1.0"

    - title: DOM 插入, 外部插入
      autosort: true
      items:

        - text: .after()
          title: “插入由参数指定的内容，在匹配元素集合中的每个元素之后。
          doc: after
          src: jQuery.fn.after
          from: "1.0"

        - text: .before()
          title: “插入由参数指定的内容，在匹配元素集合中的每个元素之前。
          doc: before
          src: jQuery.fn.before
          from: "1.0"

        - text: .insertAfter()
          title: 在目标后插入匹配元素集合中的每个元素。
          doc: insertAfter
          src: jQuery.fn.insertAfter
          from: "1.0"

        - text: .insertBefore()
          title: 在目标之前插入匹配元素集合中的每个元素。
          doc: insertBefore
          src: jQuery.fn.insertBefore
          from: "1.0"

    - title: DOM 移除
      autosort: true
      items:

        - text: .detach()
          title: 从DOM中移除匹配的元素集。
          doc: detach
          src: jQuery.fn.detach
          from: "1.4"

        - text: .empty()
          title: 从DOM中删除匹配元素集中的所有子节点。
          doc: empty
          src: jQuery.fn.empty
          from: "1.0"

        - text: .remove()
          title: 从DOM中移除匹配的元素集。
          doc: remove
          src: jQuery.fn.remove
          from: "1.0"

        - text: .unwrap()
          title: “从DOM中删除一组匹配元素的父母，将匹配的元素留在他们的位置。
          doc: unwrap
          src: jQuery.fn.unwrap
          from: "1.4"

    - title: DOM 替换
      autosort: true
      items:

        - text: .replaceAll()
          title: 用匹配元素的集合替换每个目标元素。
          doc: replaceAll
          src: jQuery.fn.replaceAll
          from: "1.2"

        - text: .replaceWith()
          title: 使用提供的新内容替换匹配元素集中的每个元素。
          doc: replaceWith
          src: jQuery.fn.replaceWith
          from: "1.2"


traversing:
  title: 遍历
  slug: traversing
  sections:

    - title: 筛选
      autosort: true
      items:

        - text: .eq()
          title: 将匹配元素的集合缩小到指定索引的匹配元素。
          doc: eq
          src: jQuery.fn.eq
          from: "1.1.2"

        - text: .filter()
          title: 将匹配元素的集合减少到与选择器匹配的元素，或者传递函数的测试。
          doc: filter
          src: jQuery.fn.filter
          from: "1.0"

        - text: .first()
          title: 将匹配元素的集合减少到集合中的第一个元素。
          doc: first
          src: jQuery.fn.first
          from: "1.4"

        - text: .has()
          title: 将匹配元素的集合减少到具有与选择器或DOM元素匹配的后代的元素。
          doc: has
          src: jQuery.fn.has
          from: "1.4"

        - text: .is()
          title: 根据选择器检查当前匹配的元素集合，如果至少其中一个元素与选择器匹配，则返回true。
          doc: is
          src: jQuery.fn.is
          from: "1.0"

        - text: .last()
          title: 将匹配元素的集合减少到集合中的最后一个元素。
          doc: last
          src: jQuery.fn.last
          from: "1.4"

        - text: .map()
          title: “通过函数传递当前匹配集中的每个元素，生成一个包含返回值的新jQuery对象。”
          doc: map
          src: jQuery.fn.map
          from: "1.2"

        - text: .not()
          title: 从匹配元素集中删除元素。
          doc: not
          src: jQuery.fn.not
          from: "1.0"

        - text: .slice()
          title: 将匹配元素的集合减少到由一系列索引指定的子集。
          doc: slice
          src: jQuery.fn.slice
          from: "1.1.4"

    - title: 多种遍历
      autosort: true
      items:

        - text: .add()
          title: 将元素添加到匹配元素集合中。
          doc: add
          src: jQuery.fn.add
          from: "1.0"

        - text: .addBack()
          title: “将堆栈上的前一组元素添加到当前集合，可选择由选择器过滤。”
          doc: addBack
          src: jQuery.fn.addBack
          from: "1.8"

        - text: .andSelf()
          title: 将堆栈上的前一组元素添加到当前集合。
          doc: andSelf
          src: jQuery.fn.andSelf
          from: "1.2"
          deprecated: "1.8"

        - text: .contents()
          title: “获取匹配元素集合中每个元素的子元素，包括文本和注释节点。”
          doc: contents
          src: jQuery.fn.contents
          from: "1.2"

        - text: .each()
          title: “迭代一个jQuery对象，为每个匹配的元素执行一个函数。”
          doc: each
          src: jQuery.fn.each
          from: "1.0"

        - text: .end()
          title: 结束当前链中最近的过滤操作，并将匹配元素的集合返回到之前的状态。
          doc: end
          src: jQuery.fn.end
          from: "1.0"

    - title: 树遍历
      autosort: true
      items:

        - text: .children()
          title: “获取匹配元素集中的每个元素的子元素，可选择由选择器过滤。
          doc: children
          src: jQuery.fn.children
          from: "1.0"

        - text: .closest()
          title: “获取与选择器匹配的第一个祖先元素，从当前元素开始，并通过DOM树进行。
          doc: closest
          src: jQuery.fn.closest
          from: "1.3"

        - text: .find()
          title: “获取当前匹配元素集合中每个元素的后代，由选择器过滤。”
          doc: find
          src: jQuery.fn.find
          from: "1.0"

        - text: .next()
          title: “获取匹配元素集合中每个元素的紧跟同步，如果提供了一个选择器，则只有在匹配该选择符的情况下才能检索下一个兄弟节点。
          doc: next
          src: jQuery.fn.next
          from: "1.0"

        - text: .nextAll()
          title: “获取匹配元素集中的每个元素的所有以下兄弟节点，可选择由选择器过滤。
          doc: nextAll
          src: jQuery.fn.nextAll
          from: "1.2"

        - text: .nextUntil()
          title: 获取每个元素的所有以下兄弟节点，但不包括由选择器匹配的元素。
          doc: nextUntil
          src: jQuery.fn.nextUntil
          from: "1.4"

        - text: .parent()
          title: “获取当前匹配元素集合中每个元素的父项，可选择由选择器过滤。
          doc: parent
          src: jQuery.fn.parent
          from: "1.0"

        - text: .parents()
          title: “获取当前匹配元素集合中每个元素的祖先，可选择由选择器过滤。”
          doc: parents
          src: jQuery.fn.parents
          from: "1.0"

        - text: .parentsUntil()
          title: “获取当前匹配元素集合中每个元素的祖先，直到但不包括由选择符匹配的元素。
          doc: parentsUntil
          src: jQuery.fn.parentsUntil
          from: "1.4"

        - text: .prev()
          title: “获取匹配元素集中的每个元素的前一个同级，可选择由选择器过滤。
          doc: prev
          src: jQuery.fn.prev
          from: "1.0"

        - text: .prevAll()
          title: “获取匹配元素集合中每个元素的所有先前兄弟节点，可选择由选择器过滤。
          doc: prevAll
          src: jQuery.fn.prevAll
          from: "1.2"

        - text: .prevUntil()
          title: 获取每个元素的所有以前的兄弟姐妹，但不包括由选择器匹配的元素。
          doc: prevUntil
          src: jQuery.fn.prevUntil
          from: "1.4"

        - text: .siblings()
          title: “获取匹配元素集合中每个元素的兄弟姐妹，可选择由选择器过滤。”
          doc: siblings
          src: jQuery.fn.siblings
          from: "1.0"


events:
  title: 事件
  slug: events
  sections:

    - title: 浏览器事件
      autosort: true
      items:

        - text: .error()
          title: 将事件处理程序绑定到“错误”JavaScript事件。
          doc: error
          src: jQuery.fn.error
          from: "1.0"
          deprecated: "1.8"
          removed: "3.0"

        - text: .resize()
          title: “将事件处理程序绑定到”resize“JavaScript事件，或触发元素上的事件。
          doc: resize
          src: jQuery.fn.resize
          from: "1.0"

        - text: .scroll()
          title: “将事件处理程序绑定到”滚动“JavaScript事件，或触发元素上的事件。
          doc: scroll
          src: jQuery.fn.scroll
          from: "1.0"

    - title: 文档加载
      autosort: true
      items:

        - text: .load()
          title: 将事件处理程序绑定到“加载”JavaScript事件。
          doc: load-event
          src: jQuery.fn.load
          from: "1.0"
          deprecated: "1.8"
          removed: "3.0"

        - text: .ready()
          title: 指定DOM完全加载时执行的函数。
          doc: ready
          src: jQuery.fn.ready
          from: "1.0"

        - text: .unload()
          title: 将事件处理程序绑定到“卸载”JavaScript事件。
          doc: unload
          src: jQuery.fn.unload
          from: "1.0"
          deprecated: "1.8"
          removed: "3.0"

    - title: 事件绑定
      autosort: true
      items:

        - text: .bind()
          title: 将一个处理程序附加到事件的元素。
          doc: bind
          src: jQuery.fn.bind
          from: "1.0"

        - text: .delegate()
          title: “将一个或多个事件附加到一个或多个事件的所有元素，与现在或将来的选择器匹配，基于一组特定的根元素。
          doc: delegate
          src: jQuery.fn.delegate
          from: "1.4.2"

        - text: .die()
          title: 从元素中删除以前使用.live（）附加的所有事件处理程序。
          doc: die
          src: jQuery.fn.die
          from: "1.3"
          deprecated: "1.7"
          removed: "1.9"

        - text: .live()
          title: “现在和将来，为与当前选择器匹配的所有元素附加事件处理程序。”
          doc: live
          src: jQuery.fn.live
          from: "1.3"
          deprecated: "1.7"
          removed: "1.9"

        - text: .off()
          title: 删除事件处理程序。
          doc: off
          src: jQuery.fn.off
          from: "1.7"

        - text: .on()
          title: 将一个或多个事件的事件处理函数附加到所选元素。
          doc: on
          src: jQuery.fn.on
          from: "1.7"

        - text: .one()
          title: 将一个处理程序附加到事件的元素。处理程序每​​个元素最多执行一次。
          doc: one
          src: jQuery.fn.one
          from: "1.1"

        - text: .trigger()
          title: 执行附加到给定事件类型的匹配元素的所有处理程序和行为。
          doc: trigger
          src: jQuery.fn.trigger
          from: "1.0"

        - text: .triggerHandler()
          title: 执行附加到事件元素的所有处理程序。
          doc: triggerHandler
          src: jQuery.fn.triggerHandler
          from: "1.2"

        - text: .unbind()
          title: 从元素中删除先前附加的事件处理程序。
          doc: unbind
          src: jQuery.fn.unbind
          from: "1.0"

        - text: .undelegate()
          title: 根据一组特定的根元素，从事件中删除与现在或将来的当前选择器匹配的所有元素的处理程序。
          doc: undelegate
          src: jQuery.fn.undelegate
          from: "1.4.2"

    - title: 表单事件
      autosort: true
      items:

        - text: .blur()
          title: “将事件处理程序绑定到”blur“JavaScript事件，或者在元素上触发该事件。”
          doc: blur
          src: jQuery.fn.blur
          from: "1.0"

        - text: .change()
          title: “将事件处理程序绑定到”更改“JavaScript事件，或在元素上触发该事件。
          doc: change
          src: jQuery.fn.change
          from: "1.0"

        - text: .focus()
          title: “将事件处理程序绑定到”focus“JavaScript事件，或者触发该元素上的事件。
          doc: focus
          src: jQuery.fn.focus
          from: "1.0"

        - text: .focusin()
          title: “将事件处理程序绑定到”focusin“JavaScript事件。
          doc: focusin
          src: jQuery.fn.focusin
          from: "1.4"

        - text: .focusout()
          title: “将事件处理程序绑定到”focusout“JavaScript事件。
          doc: focusout
          src: jQuery.fn.focusout
          from: "1.4"

        - text: .select()
          title: “将事件处理程序绑定到”select“JavaScript事件，或在元素上触发该事件。”
          doc: select
          src: jQuery.fn.select
          from: "1.0"

        - text: .submit()
          title: “将事件处理程序绑定到”提交“JavaScript事件，或触发元素上的事件。
          doc: submit
          src: jQuery.fn.submit
          from: "1.0"

    - title: 键盘事件
      autosort: true
      items:

        - text: .keydown()
          title: “将事件处理程序绑定到”keydown“JavaScript事件，或在元素上触发该事件。
          doc: keydown
          src: jQuery.fn.keydown
          from: "1.0"

        - text: .keypress()
          title: “将事件处理程序绑定到”keypress“JavaScript事件，或触发元素上的事件。
          doc: keypress
          src: jQuery.fn.keypress
          from: "1.0"

        - text: .keyup()
          title: “将事件处理程序绑定到”keyup“JavaScript事件，或在元素上触发该事件。”
          doc: keyup
          src: jQuery.fn.keyup
          from: "1.0"

    - title: 鼠标事件
      break: true
      autosort: true
      items:

        - text: .click()
          title: “将事件处理程序绑定到”点击“JavaScript事件，或触发元素上的事件。
          doc: click
          src: jQuery.fn.click
          from: "1.0"

        - text: .contextMenu()
          title: “将事件处理程序绑定到”contextmenu“JavaScript事件，或者触发该元素上的事件。
          doc: contextmenu
          src: jQuery.fn.contextmenu
          from: "1.0"

        - text: .dblclick()
          title: “将事件处理程序绑定到”dblclick“JavaScript事件，或者触发元素上的事件。
          doc: dblclick
          src: jQuery.fn.dblclick
          from: "1.0"

        - text: .hover()
          title: “将两个处理程序绑定到匹配的元素，当鼠标指针进入和离开元素时执行。
          doc: hover
          src: jQuery.fn.hover
          from: "1.0"

        - text: .mousedown()
          title: “将事件处理程序绑定到”mousedown“JavaScript事件，或者在元素上触发该事件。
          doc: mousedown
          src: jQuery.fn.mousedown
          from: "1.0"

        - text: .mouseenter()
          title: “绑定一个事件处理程序，当鼠标进入一个元素时触发，或者触发元素上的处理程序。”
          doc: mouseenter
          src: jQuery.fn.mouseenter
          from: "1.0"

        - text: .mouseleave()
          title: “绑定一个事件处理程序，当鼠标离开一个元素时触发，或者触发元素上的处理程序。”
          doc: mouseleave
          src: jQuery.fn.mouseleave
          from: "1.0"

        - text: .mousemove()
          title: “将事件处理程序绑定到'mousemove'JavaScript事件，或者触发元素上的事件。
          doc: mousemove
          src: jQuery.fn.mousemove
          from: "1.0"

        - text: .mouseout()
          title: “将事件处理程序绑定到”mouseout“JavaScript事件，或在元素上触发该事件。
          doc: mouseout
          src: jQuery.fn.mouseout
          from: "1.0"

        - text: .mouseover()
          title: “将事件处理程序绑定到”mouseover“JavaScript事件，或者触发元素上的该事件。
          doc: mouseover
          src: jQuery.fn.mouseover
          from: "1.0"

        - text: .mouseup()
          title: “将事件处理程序绑定到”mouseup“JavaScript事件，或者在元素上触发该事件。”
          doc: mouseup
          src: jQuery.fn.mouseup
          from: "1.0"

        - text: .toggle()
          title: “将两个或多个处理程序绑定到匹配的元素，以备用点击执行。”
          doc: toggle-event
          src: jQuery.fn.toggle
          from: "1.0"
          deprecated: "1.8"
          removed: "1.9"

    - title: 事件对象
      autosort: true
      items:

        - text: event.currentTarget
          title: 事件冒泡阶段中的当前DOM元素。
          doc: event.currentTarget
          from: "1.3"

        - text: event.delegateTarget
          title: 附加了当前调用的jQuery事件处理程序的元素。
          doc: event.delegateTarget
          from: "1.7"

        - text: event.data
          title: 当当前执行的处理程序被绑定时，可选数据传递给jQuery.fn.bind。
          doc: event.data
          from: "1.1"

        - text: event.isDefaultPrevented()
          title: 返回是否在此事件对象上调用了event.preventDefault（）。
          doc: event.isDefaultPrevented
          from: "1.3"

        - text: event.isImmediatePropagationStopped()
          title: 返回是否在此事件对象上调用了event.stopImmediatePropagation（）。
          doc: event.isImmediatePropagationStopped
          from: "1.3"

        - text: event.isPropagationStopped()
          title: 返回是否在此事件对象上调用了event.stopPropagation（）。
          doc: event.isPropagationStopped
          from: "1.3"

        - text: event.metaKey
          title: 表示当事件触发时是否按下了META键。
          doc: event.metaKey
          from: "1.0.4"

        - text: event.namespace
          title: 触发事件时指定的命名空间。
          doc: event.namespace
          from: "1.4.3"

        - text: event.pageX
          title: 相对于文档左边缘的鼠标位置。
          doc: event.pageX
          from: "1.0.4"

        - text: event.pageY
          title: 相对于文档顶部边缘的鼠标位置。
          doc: event.pageY
          from: "1.0.4"

        - text: event.preventDefault()
          title: “如果调用此方法，则不会触发事件的默认操作。”
          doc: event.preventDefault
          from: "1.0"

        - text: event.relatedTarget
          title: “事件中涉及的其他DOM元素（如果有的话）”。
          doc: event.relatedTarget
          from: "1.1.4"

        - text: event.result
          title: “由事件触发的事件处理程序返回的最后一个值，除非该值未定义。
          doc: event.result
          from: "1.3"

        - text: event.stopImmediatePropagation()
          title: 防止其他事件处理程序被调用。
          doc: event.stopImmediatePropagation
          from: "1.3"

        - text: event.stopPropagation()
          title: “防止事件冒出DOM树，阻止任何父处理程序被通知事件。”
          doc: event.stopPropagation
          from: "1.0"

        - text: event.target
          title: 发起事件的DOM元素。
          doc: event.target
          from: "1.0"

        - text: event.timeStamp
          title: “事件触发时间与1970年1月1日之间的毫秒数之间的差异。”
          doc: event.timeStamp
          from: "1.2.6"

        - text: event.type
          title: 描述事件的性质。
          doc: event.type
          from: "1.0"

        - text: event.which
          title: “对于键或按钮事件，此属性表示按下的特定按钮或键。”
          doc: event.which
          from: "1.1.3"

effects:
  title: 效果
  slug: effects
  sections:

    - title: 基础
      autosort: true
      items:

        - text: .hide()
          title: 隐藏匹配元素。
          doc: hide
          src: jQuery.fn.hide
          from: "1.0"

        - text: .show()
          title: 显示匹配的元素。
          doc: show
          src: jQuery.fn.show
          from: "1.0"

        - text: .toggle()
          title: 显示或隐藏匹配的元素。
          doc: toggle
          src: jQuery.fn.toggle
          from: "1.0"

    - title: 自定义
      autosort: true
      items:

        - text: .animate()
          title: 执行一组CSS属性的自定义动画。
          doc: animate
          src: jQuery.fn.animate
          from: "1.0"

        - text: .clearQueue()
          title: 从队列中删除所有尚未运行的项目。
          doc: clearQueue
          src: jQuery.fn.clearQueue
          from: "1.4"

        - text: .delay()
          title: 设置一个计时器来延迟队列中后续项目的执行。
          doc: delay
          src: jQuery.fn.delay
          from: "1.4"

        - text: .dequeue()
          title: 对匹配的元素执行队列中的下一个功能。
          doc: dequeue
          src: jQuery.fn.dequeue
          from: "1.2"

        - text: jQuery.dequeue()
          title: 在匹配元素的队列上执行下一个函数。
          doc: jQuery.dequeue
          src: jQuery.dequeue
          from: "1.3"

        - text: .finish()
          title: “停止当前运行的动画，删除所有排队的动画，并完成匹配元素的所有动画。”
          doc: finish
          src: jQuery.fn.finish
          from: "1.9"

        - text: jQuery.fx.interval
          title: 动画触发的速率（毫秒）。
          doc: jQuery.fx.interval
          src: jQuery.fx.interval
          from: "1.4.3"

        - text: jQuery.fx.off
          title: 全局禁用所有动画。
          doc: jQuery.fx.off
          src: jQuery.fx.off
          from: "1.3"

        - text: jQuery.speed
          title: 创建一个包含一组属性的对象，准备在定制动画的定义中使用。
          doc: jQuery.speed
          src: jQuery.speed
          from: "1.0"

        - text: .queue()
          title: 显示或操纵要在匹配元素上执行的功能队列。
          doc: queue
          src: jQuery.fn.queue
          from: "1.2"

        - text: jQuery.queue()
          title: 显示或操纵要在匹配元素上执行的功能队列。
          doc: jQuery.queue
          src: jQuery.queue
          from: "1.3"

        - text: .stop()
          title: 停止匹配元素上当前运行的动画。
          doc: stop
          src: jQuery.fn.stop
          from: "1.2"

    - title: 渐变
      autosort: true
      items:

        - text: .fadeIn()
          title: 通过将它们淡化为不透明来显示匹配的元素。
          doc: fadeIn
          src: jQuery.fn.fadeIn
          from: "1.0"

        - text: .fadeOut()
          title: 通过将它们淡化为透明来隐藏匹配的元素。
          doc: fadeOut
          src: jQuery.fn.fadeOut
          from: "1.0"

        - text: .fadeTo()
          title: 调整匹配元素的不透明度。
          doc: fadeTo
          src: jQuery.fn.fadeTo
          from: "1.0"

        - text: .fadeToggle()
          title: 通过动画化其不透明度来显示或隐藏匹配的元素。
          doc: fadeToggle
          src: jQuery.fn.fadeToggle
          from: "1.4.4"

    - title: 滑动
      autosort: true
      items:

        - text: .slideDown()
          title: 用滑动运动显示匹配的元素。
          doc: slideDown
          src: jQuery.fn.slideDown
          from: "1.0"

        - text: .slideToggle()
          title: 用滑动运动显示或隐藏匹配的元素。
          doc: slideToggle
          src: jQuery.fn.slideToggle
          from: "1.0"

        - text: .slideUp()
          title: 用滑动运动隐藏匹配的元素。
          doc: slideUp
          src: jQuery.fn.slideUp
          from: "1.0"


ajax:
  title: Ajax
  slug: ajax
  sections:

    - title: 全局Ajax事件处理程序s
      autosort: true
      items:

        - text: .ajaxComplete()
          title: 注册在Ajax请求完成时调用的处理程序。这是一个Ajax事件。
          doc: ajaxComplete
          src: jQuery.fn.ajaxComplete
          from: "1.0"

        - text: .ajaxError()
          title: 当Ajax请求完成并发生错误时，注册要调用的处理程序。这是一个Ajax事件。
          doc: ajaxError
          src: jQuery.fn.ajaxError
          from: "1.0"

        - text: .ajaxSend()
          title: 在发送Ajax请求之前附加要执行的函数。这是一个Ajax事件。
          doc: ajaxSend
          src: jQuery.fn.ajaxSend
          from: "1.0"

        - text: .ajaxStart()
          title: 在第一个Ajax请求开始时，注册要调用的处理程序。这是一个Ajax事件。
          doc: ajaxStart
          src: jQuery.fn.ajaxStart
          from: "1.0"

        - text: .ajaxStop()
          title: 当所有Ajax请求完成时，注册要调用的处理程序。这是一个Ajax事件。
          doc: ajaxStop
          src: jQuery.fn.ajaxStop
          from: "1.0"

        - text: .ajaxSuccess()
          title: 在Ajax请求成功完成时附加要执行的函数。这是一个Ajax事件。
          doc: ajaxSuccess
          src: jQuery.fn.ajaxSuccess
          from: "1.0"

    - title: 辅助函数
      autosort: true
      items:

        - text: jQuery.param()
          title: “创建数组或对象的序列化表示，适用于URL查询字符串或Ajax请求。”
          doc: jQuery.param
          src: jQuery.param
          from: "1.2"

        - text: .serialize()
          title: 编写一组表单元素作为提交的字符串。
          doc: serialize
          src: jQuery.fn.serialize
          from: "1.0"

        - text: .serializeArray()
          title: 将一组表单元素编码为名称和值的数组。
          doc: serializeArray
          src: jQuery.fn.serializeArray
          from: "1.2"

    - title: 底层接口
      autosort: true
      items:

        - text: jQuery.ajax()
          title: 执行异步HTTP（Ajax）请求。
          doc: jQuery.ajax
          src: jQuery.ajax
          from: "1.0"

        - text: jQuery.prefilter()
          title: 在发送每个请求之前处理$ .ajax（）之前处理自定义Ajax选项或修改现有选项。
          doc: jQuery.ajaxPrefilter
          src: jQuery.ajaxPrefilter
          from: "1.5"

        - text: jQuery.ajaxSetup()
          title: 设置未来Ajax请求的默认值。
          doc: jQuery.ajaxSetup
          src: jQuery.ajaxSetup
          from: "1.1"

        - text: jQuery.ajaxTransport()
          title: 创建一个处理Ajax数据实际传输的对象。
          doc: jQuery.ajaxTransport
          src: jQuery.ajaxTransport
          from: "1.5"

    - title: 快捷方法
      autosort: true
      items:

        - text: jQuery.get()
          title: 使用HTTP GET请求从服务器加载数据。
          doc: jQuery.get
          src: jQuery.get
          from: "1.0"

        - text: jQuery.getJSON()
          title: 使用GET HTTP请求从服务器加载JSON编码的数据。
          doc: jQuery.getJSON
          src: jQuery.getJSON
          from: "1.0"

        - text: jQuery.getScript()
          title: “使用GET HTTP请求从服务器加载JavaScript文件，然后执行它。”
          doc: jQuery.getScript
          src: jQuery.getScript
          from: "1.0"

        - text: jQuery.post()
          title: 使用HTTP POST请求从服务器加载数据。
          doc: jQuery.post
          src: jQuery.post
          from: "1.0"

        - text: .load()
          title: 从服务器加载数据并将返回的HTML放入匹配的元素。
          doc: load
          src: jQuery.fn.load
          from: "1.0"

core:
  title: 核心
  slug: core
  sections:

    - title: jQuery 对象
      autosort: true
      items:

        - text: jQuery()
          title: 返回基于传递参数或通过传递HTML字符串创建的DOM中找到的匹配元素的集合。
          doc: jQuery
          src: jQuery
          from: "1.0"

        - text: jQuery.noConflict()
          title: “放弃jQuery控制$变量”。
          doc: jQuery.noConflict
          src: jQuery.noConflict
          from: "1.0"

        - text: jQuery.sub()
          title: 创建一个新的jQuery副本，其属性和方法可以修改而不影响原始的jQuery对象。
          doc: jQuery.sub
          src: jQuery.sub
          from: "1.5"
          deprecated: "1.7"
          removed: "1.9"

        - text: jQuery.holdReady()
          title: 保存或释放执行jQuery的ready事件。
          doc: jQuery.holdReady
          src: jQuery.holdReady
          from: "1.6"

        - text: jQuery.when()
          title: “提供一种基于一个或多个对象执行回调函数的方法，通常是表示异步事件的Deferred对象。
          doc: jQuery.when
          src: jQuery.when
          from: "1.5"

    - title: 实用工具
      autosort: true
      items:

        - text: jQuery.Deferred()
          title: 一个工厂函数，返回一个可链接的实用程序对象，该对象具有将多个回调注册到回调队列中的方法，调用回调队列，并中继任何同步或异步函数的成功或失败状态。
          doc: jQuery.Deferred
          from: "1.5"

        - text: deferred.always()
          title: 当Deferred对象被解析或拒绝时添加要调用的处理程序。
          doc: deferred.always
          from: "1.6"

        - text: deferred.done()
          title: 当Deferred对象被解析时添加要调用的处理程序。
          doc: deferred.done
          from: "1.5"

        - text: deferred.fail()
          title: 当Deferred对象被拒绝时添加要调用的处理程序。
          doc: deferred.fail
          from: "1.5"

        - text: deferred.isRejected()
          title: 确定Deferred对象是否被拒绝。
          doc: deferred.isRejected
          from: "1.5"
          deprecated: "1.7"
          removed: "1.8"

        - text: deferred.isResolved()
          title: 确定Deferred对象是否已解决。
          doc: deferred.isResolved
          from: "1.5"
          deprecated: "1.7"
          removed: "1.8"

        - text: deferred.notify()
          title: 使用给定的参数调用Deferred对象的progressCallbacks。
          doc: deferred.notify
          from: "1.7"

        - text: deferred.notifyWith()
          title: 使用给定的上下文和参数调用Deferred对象的progressCallbacks。
          doc: deferred.notifyWith
          from: "1.7"

        - text: deferred.pipe()
          title: 过滤和/或链延迟的实用方法。
          doc: deferred.pipe
          from: "1.6"
          deprecated: "1.8"

        - text: deferred.progress()
          title: 当Deferred对象生成进度通知时，添加要调用的处理程序。
          doc: deferred.progress
          from: "1.7"

        - text: deferred.promise()
          title: “返回延期的承诺对象”。
          doc: deferred.promise
          from: "1.5"

        - text: deferred.reject()
          title: 拒绝延迟对象并使用给定的参数调用任何failCallbacks。
          doc: deferred.reject
          from: "1.5"

        - text: deferred.rejectWith()
          title: 拒绝延迟对象，并使用给定的上下文和参数调用任何failCallbacks。
          doc: deferred.rejectWith
          from: "1.5"

        - text: deferred.resolve()
          title: 解析一个Deferred对象，并使用给定的args调用任何doneCallbacks。
          doc: deferred.resolve
          from: "1.5"

        - text: deferred.resolveWith()
          title: 解析一个Deferred对象，并使用给定的上下文和args调用任何doneCallbacks。
          doc: deferred.resolveWith
          from: "1.5"

        - text: deferred.state()
          title: 确定Deferred对象的当前状态。
          doc: deferred.state
          from: "1.7"

        - text: deferred.then()
          title: 当Deferred对象被解析或拒绝时添加要调用的处理程序。
          doc: deferred.then
          from: "1.5"

        - text: .promise()
          title: “返回承诺对象，观察当绑定到集合的某一类型的所有操作是否已排队等待完成。
          doc: promise
          from: "1.6"

    - title: DOM 元素方法
      break: true
      autosort: true
      items:

        - text: jQuery.boxModel
          title: “如果用户浏览器中的当前页面正在使用W3C CSS Box模型呈现，则表示”
          doc: jQuery.boxModel
          src: jQuery.boxModel
          from: "1.0"
          deprecated: "1.3"
          removed: "1.8"

        - text: jQuery.browser
          title: “包含用户标记，从navigator.userAgent读取，我们建议不要使用此属性;请尝试使用功能检测（参见jQuery.support）。jQuery.browser可能会在将来的版本中移动到插件jQuery的“。
          doc: jQuery.browser
          src: jQuery.browser
          from: "1.0"
          deprecated: "1.3"
          removed: "1.9"

        - text: jQuery.contains()
          title: 检查DOM节点是否在另一个DOM节点内。
          doc: jQuery.contains
          src: jQuery.contains
          from: "1.4"

        - text: jQuery.each()
          title: “一个通用的迭代器函数，可以用于无缝地迭代对象和数组。具有length属性（如函数的参数对象）的数组和数组类对象由数字索引迭代，从0到长度 - 其他对象通过其命名的属性进行迭代。“
          doc: jQuery.each
          src: jQuery.each
          from: "1.0"

        - text: jQuery.extend()
          title: 将两个或多个对象的内容合并到第一个对象中。
          doc: jQuery.extend
          src: jQuery.extend
          from: "1.0"

        - text: jQuery.globalEval()
          title: 全局执行一些JavaScript代码。
          doc: jQuery.globalEval
          src: jQuery.globalEval
          from: "1.0.4"

        - text: jQuery.grep()
          title: 查找满足过滤功能的数组元素。原始数组不受影响。
          doc: jQuery.grep
          src: jQuery.grep
          from: "1.0"

        - text: jQuery.inArray()
          title: 搜索数组中的指定值并返回其索引（如果未找到则返回-1）。
          doc: jQuery.inArray
          src: jQuery.inArray
          from: "1.2"

        - text: jQuery.isArray()
          title: 确定参数是否是一个数组。
          doc: jQuery.isArray
          src: jQuery.isArray
          from: "1.3"

        - text: jQuery.isEmptyObject()
          title: 检查对象是否为空（不包含属性）。
          doc: jQuery.isEmptyObject
          src: jQuery.isEmptyObject
          from: "1.4"

        - text: jQuery.isFunction()
          title: 确定传递的参数是否是JavaScript函数对象。
          doc: jQuery.isFunction
          src: jQuery.isFunction
          from: "1.2"

        - text: jQuery.isNumeric()
          title: 确定其参数是否为数字。
          doc: jQuery.isNumeric
          src: jQuery.isNumeric
          from: "1.7"

        - text: jQuery.isPlainObject()
          title: “检查对象是否是一个普通对象（使用”{}“或”新对象“创建）。”
          doc: jQuery.isPlainObject
          src: jQuery.isPlainObject
          from: "1.4"

        - text: jQuery.isWindow()
          title: 确定参数是否为窗口。
          doc: jQuery.isWindow
          src: jQuery.isWindow
          from: "1.4.3"

        - text: jQuery.isXMLDoc()
          title: 检查DOM节点是否在XML文档内（或是XML文档）。
          doc: jQuery.isXMLDoc
          src: jQuery.isXMLDoc
          from: "1.1.4"

        - text: jQuery.makeArray()
          title: 将类数组的对象转换为真正的JavaScript数组。
          doc: jQuery.makeArray
          src: jQuery.makeArray
          from: "1.2"

        - text: jQuery.map()
          title: 将数组或数组类对象中的所有项目转换为另一个项目数组。
          doc: jQuery.map
          src: jQuery.map
          from: "1.0"

        - text: jQuery.merge()
          title: 将两个数组的内容合并到第一个数组中。
          doc: jQuery.merge
          src: jQuery.merge
          from: "1.0"

        - text: jQuery.noop()
          title: 一个空的功能。
          doc: jQuery.noop
          src: jQuery.noop
          from: "1.4"

        - text: jQuery.now()
          title: 返回一个代表当前时间的数字。
          doc: jQuery.now
          src: jQuery.now
          from: "1.4.3"

        - text: jQuery.parseHTML()
          title: 将一个字符串解析成一个DOM节点数组。
          doc: jQuery.parseHTML
          src: jQuery.parseHTML
          from: "1.8"

        - text: jQuery.parseJSON()
          title: 使用格式良好的JSON字符串，并返回生成的JavaScript对象。
          doc: jQuery.parseJSON
          src: jQuery.parseJSON
          from: "1.4.1"
          deprecated: "3.0"

        - text: jQuery.parseXML()
          title: 将字符串解析为XML文档。
          doc: jQuery.parseXML
          src: jQuery.parseXML
          from: "1.5"

        - text: jQuery.proxy()
          title: 获取一个函数并返回一个总是具有特定上下文的新函数。
          doc: jQuery.proxy
          src: jQuery.proxy
          from: "1.4"

        - text: jQuery.support
          title: 表示存在不同浏览器功能或错误的属性集合。
          doc: jQuery.support
          src: jQuery.support
          from: "1.3"
          deprecated: "1.9"

        - text: jQuery.trim()
          title: 从字符串的开始和结尾移除空格。
          doc: jQuery.trim
          src: jQuery.trim
          from: "1.0"

        - text: jQuery.type()
          title: “确定对象的内部JavaScript [[Class]]”。
          doc: jQuery.type
          src: jQuery.type
          from: "1.4.3"

        - text: jQuery.unique()
          title: “排序一个DOM元素数组，删除重复的元素。请注意，这仅适用于DOM元素的数组，而不是字符串或数字。”
          doc: jQuery.unique
          src: jQuery.unique
          from: "1.1.3"
          deprecated: "3.0"

        - text: jQuery.uniqueSort()
          title: “排序一个DOM元素数组，删除重复的元素。请注意，这仅适用于DOM元素的数组，而不是字符串或数字。”
          doc: jQuery.uniqueSort
          src: jQuery.uniqueSort
          from: "3.0"

    - title: 内部构件
      break: true
      autosort: true
      items:

        - text: .get()
          title: 检索由jQuery对象匹配的DOM元素。
          doc: get
          src: jQuery.fn.get
          from: "1.0"

        - text: .index()
          title: 从匹配的元素中搜索给定的元素。
          doc: index
          src: jQuery.fn.index
          from: "1.0"

        - text: .size()
          title: 返回jQuery对象中的元素数。
          doc: size
          src: jQuery.fn.size
          from: "1.0"
          deprecated: "1.8"

        - text: .toArray()
          title: “检索包含在jQuery集合中的所有DOM元素，作为数组。
          doc: toArray
          src: jQuery.fn.toArray
          from: "1.4"

    - title: 延迟对象
      autosort: true
      items:

        - text: .jquery
          title: 包含jQuery版本号的字符串。
          doc: jquery-2
          src: jQuery.fn.jquery
          from: "1.0"

        - text: .context
          title: DOM节点上下文最初传递给jQuery（）; 如果没有一个通过，那么上下文可能是文档。
          doc: context
          src: jQuery.fn.context
          from: "1.3"
          deprecated: "1-10"
          removed: "3.0"

        - text: jQuery.error()
          title: 取一个字符串并抛出一个包含它的异常。
          doc: jQuery.error
          src: jQuery.error
          from: "1.4.1"

        - text: .length
          title: jQuery对象中的元素数。
          doc: length
          src: jQuery.fn.length
          from: "1.0"

        - text: .pushStack()
          title: 将一组DOM元素添加到jQuery堆栈上。
          doc: pushStack
          src: jQuery.fn.pushStack
          from: "1.0"

        - text: .selector
          title: 表示最初传递给jQuery（）的选择器的选择器。
          doc: selector
          src: jQuery.fn.selector
          from: "1.3"
          deprecated: "1.7"
          removed: "3.0"

    - title: 回调对象
      autosort: true
      items:

        - text: jQuery.Callbacks()
          title: 一个多用途回调列表对象，提供了一种强大的方法来管理回调列表。
          doc: jQuery.Callbacks
          src: jQuery.Callbacks
          from: "1.7"

        - text: callbacks.add()
          title: 将回调或回调的集合添加到回调列表。
          doc: callbacks.add
          from: "1.7"

        - text: callbacks.disable()
          title: 禁用一个回调列表做任何事情。
          doc: callbacks.disable
          from: "1.7"

        - text: callbacks.disabled()
          title: 确定回调列表是否被禁用。
          doc: callbacks.disabled
          from: "1.7"

        - text: callbacks.empty()
          title: 从列表中删除所有回调。
          doc: callbacks.empty
          from: "1.7"

        - text: callbacks.fire()
          title: 使用给定的参数调用所有的回调函数。
          doc: callbacks.fire
          from: "1.7"

        - text: callbacks.fired()
          title: 确定回调是否已经被调用至少一次。
          doc: callbacks.fired
          from: "1.7"

        - text: callbacks.fireWith()
          title: 使用给定的上下文和参数调用列表中的所有回调。
          doc: callbacks.fireWith
          from: "1.7"

        - text: callbacks.has()
          title: 确定提供的回调是否在列表中。
          doc: callbacks.has
          from: "1.7"

        - text: callbacks.lock()
          title: 将回调列表锁定在当前状态。
          doc: callbacks.lock
          from: "1.7"

        - text: callbacks.locked()
          title: 确定回调列表是否已被锁定。
          doc: callbacks.locked
          from: "1.7"

        - text: callbacks.remove()
          title: 从回调列表中删除回调或回调的集合。
          doc: callbacks.remove
          from: "1.7"
---