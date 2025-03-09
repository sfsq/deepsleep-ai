let chatCount = 0;
const maxChats = 10;
let chats = new Map();
let chatTitles = new Map();
let currentChatId = null;
let currentTimer = null;
let isWaitingResponse = false;
let isStreaming = false;
let currentLanguage = 'zh';
let options = {
    deepThink: false,
    webSearch: false
};

const translations = {
    zh: {
        newChat: "新对话",
        placeholder: "输入消息，Enter 发送，Shift + Enter 换行",
        thinking: "思考中...",
        aiThinking: "AI 正在思考...",
        deepThink: "深度思考",
        webSearch: "联网搜索",
        serverBusy: "服务器繁忙，请稍后再试",
        welcome: "你好！我是 DeepSleep，一个 AI 助手。请问有什么我可以帮助你的？",
        thinkingTime: "思考耗时：",
        seconds: "秒",
        chatDisabled: "对话已禁用",
        streamingInProgress: "正在回复中，请等待...",
        maxChatsReached: "对话数量已达上限，请删除一些旧对话后再试。",
        chars: "的愿协砂妥摧疵丫虱僮是李轮恭谣栗憧鹦坷玆不底略塔缸菊忏蒹笆衲我约慧贺芒瘦琨憩竽杳一雄幻魂陵钧阙懊梖姒有课脸睛雯匿萱聋賏嬿大答短逸轨砖怅盎闺忪在令鹰旗虾嘘辄婊浙鲲人深冲萨寸缚搏盔疙槁了票朝丸呦嘟榕峦蓁馋中达忍厚洒盆饥矜烷甡到演游斋贞债捣凛喈癞资 早河芬蜂霞渣铺跩咋要卖批革钻挽眺鹉酣翌可棒混庸厕逍虞蜴卍栱以够窗舒鹤畔俯惚遏唠这黑乡饮摔蕴绅畴亘轶个院蛋闭盒颈谤羁贔驮你假季励虫获珑媛万铬会曲散顿氛畏咫堑掐驽好火册仰悄喂俏泛蛹阜为准弃阁霖脾淆疮骥啐上百熟孟愧姬蜀韶樊猷来谈奖昌斜赴楠憋雱癈就胜唯访尸囊乞祁戾蝨学碟藏绪循噪诅诟别淂交术婚裕俩熄匀搔匮楹也推镜勿堡锡貂蜥崛氨用存紧州旺诀寰袒咨菅能治猜阐恶肇迋奄湃泞如离喝抢叉璋敞忱账戟文易尊扫燕晕跪玖粟拮时往乾糊津浊囚拌谯踞没况县宙臣伐溺悴骖忐说晚伯尝丧峡骆祠焜骅他示偏菩茂窃憬扼溅彧看证偷赐椅枕苇髅漳纰提段秋赤缠倘脊筑欸罈那导层喊刑慌瑶蛤葆郢问伤颗盗脉垮疆茱瘩聒生调食擎杉帕乍骐剷跚过团淡劝泊莹杆捶恙犛下七申奋撒琦眸须陞驷请永冠慈递厢窜亢榻姣天刚衣尽疲渺孽葔潞谪们哥仅污杆脏卅艸哞堐所甚帐狐趁削夭筛锤忑多德赞罚欠锣簧岳琢焊麽杀购幽盈虐徘岳簷饷小怕犯准晃豔馒慵仆钠想包敬兼蛇薇趴戮厘娄得列勇尖牡霉鎚跎篷倭之概洲彰慎衍啼砰揆胭还照束灰粒腊冗仑遽邋电夜斗番系喧缉炜峘秧出排徒衡倦娶絮篱圃恻工客嘉鲜溜遂啄笈町宸对绝柔扩遵睁沸瘫馊鲈都软绩毫腐裙萃吏潢妤机商笨夸疾韦嘶痊岖椿自根拥炮鸭矢鸳庶蟆锂後九漂拆璃伺禽厥嚥猬子切狮监牢钉惫棘怂嶙而条诗栏劣婴徨娑琬醺讯集围迟患蓄屐沁镶啵站千乖证祂奸舆窘侄嘈去落孤倾呈廿邂鲸庵逖心竟姓郁浑堵掀缕瞑涘只越吸汪剂葬嫖硷赂爿家待私纷妖蓬苟俨澹卤知忘避托玻鸦檯栈杵鮀国尽范漏塑尝矫蔬苯滕台据抗渡飙挨铎鸠劭荪很双盖姑伏蕾棱闲忡殡信供祝秒弊璿哗迢枣嫦成称序吾扮挚徊恣佗臧章座晓窝侬券拱昀掺峋何值富辆渴厨蕙泠捅坻同消译龄歪醇徬涟迩暾道产巨跌苗呻滞眩衿鬩地红秀浩汗霍吠噫饕鈃发跑馀肥陶剃妞娥皎俎法嘛辉兽栋浆氾荼娓据无园插煞琳葡芹鳄镉蜒然附察抹蓉暨叩镖糯褉但硬庆酸埋滨朽侃垠邑吗云积税叡履侪虏潺缈当游愈陷澎捞赦俾佣涎於展端谷并咕汐樟柿沚本执移冲泣耕丰榴绸沪现闻宫杜腾棉虔咛庠綵年唱挥胸柯烁茅炬濂袓前育爆甘催尉棠窦逑轫真斯港胞畅艰仑笠狈蛢最某雪诞勾妓膳翱踝捺和技硕岂樱棺魉莘鲶拴新唉借辞阮鹏儡躇傜耆因息帅墙斥蒸鸯翡叱柑果苦丢凉搜癌懦姜缇潁定质括碎踩纬渗枭懵浚意油挂晶返菌邵匕椭喟情救盘邱坛撇筱藩贻棣点效偶逻垂惩畜徉猥嗷题须末脆唤绑崖觞哄熨其介厅喷储甫瑕拣咁挓事首朱玫贩崩蕊吱粱甕方助凡娃匆魄揣皈迭槐清职惊培添拂擒墉邰娩科例货咱坑汰挂傌悚鑞样热灭潜柴氓屯梢榆蕤些毕醒祥邓歇莽巅脓腋吧节虚筑糖萝矽踌冇瘁叁害瑞孔昆呒侏萌寨铿此击拍柏暮萄弧幌镁澍位乱遗叭柜蕃澈杭摒莠理态忠邀娟曝饺侥徕糸行嗯志犹腹疋奎栾嗦悌作宝透妻煮向裘奠烜勺经倒烈估泛胏塌痲萼涌者注银荒稀烛饵夸壬枰什停顶袋兹腻偎瘖诧伝谢古雅径抑襄泻芯碇锌名输诺垃携妆蔓蟀镳饴日规圆傲芭髓彗驿锚幡正福熊淑框朴樽耨迥铄华亲替圾彷薯衔禾孚胯话查休旦罐颂茍瑾陇岌开复材亿虹薛磋塾豺痢实步挑截拷滩萎俭悖姝再举侠币萍橘廓沱搥诳城鱼鸡羽臂贰悯腺钛醃爱断累妇袭嘲铸橱肄瞠与终互泥叙叹茎僵脐晡二轻掌欺吻枚歼惋唢獠动环念弦仿侮壤擞诙膫比练米筹贼豹浇噗拎腮高印伴舍羯巢蚤呛戎唰面随辅忌浴酬恃抴崚榛又依降串体碑瞻蛀喳烯车趣豪伸翠翩拚渲鳕膊力限篮喇灿蚕汀酋嗣淅或响洗耻敲辽椒跆砥纣种省健繁胁矿嚼埸枋佶像局饭廖侣屡粥嬉沽葩应续怜逛蚁谴磅怆渥嫡女司疯劲秩卵佫噶黝狞教角宏臭佑撰勘耙鱿缄分简困鲁谨攀脖憔殇诿手极址壮寡肌吨挠蔫帛打干兮捕岳冯澜羲爻甬已篇操穷赔宴锻扑籁芩次罗临拔掩盏笙眶孜蹛长佛骗于匙阪厄蛎恿玑太克咧丑曹浦嚷蹉衙鹫明阳药莉纽迦伽孵痣豊己武绿糟签颁徽淀骧倜路疑尼炸晋炼隅恸攒蹴起送蔡坡喻尬寥灸鎗镂相拉玉蒙绵胀缤愕闸丘主习辛腿咏辟簾淤孺腓关源辈坦摊艘烘狙洄邸凤免敏怒馨株茜槛昊脯间志减甜珊只驯嗈踼毁呢鸟彼韩孕湘噎霎沃菀觉烦街缓杰饲厦嗽妍犊该足聚悉拘爹闰兢拽珂十馆郎扯哟梨煤瑚牯盅外仍泡割羡喽链冉逵挹凰低恨艾肤侍锈甸泯烩友广苏胎肝疫诫怔龌錡才土缩恒袍雕颊蠹銮胳民呀枢玲罩黯俐缀镛叼系楼碰朵叛并曳谄雉馄进坏采泉御铝蓓灼梗猝使兵默汤谜弗暧紊麾谀她显婆猛嫁爪郤彤胤卞着率股驾庙鄙淌荐馥俦各圣童幼肠钗喀诣髦雎少码符坪谎栽昆眛璨菫全众抽巫潘狸蔑禀浣炘两争获弯埔谘峙馏鼐鹄回初宇胆卜柄躁蒜呗酮加误废昏占悸菇窑腑氟将楚赢鞋拦喉逅讦吁桀感责肯怡煌擅雇机牒帚第境砍吐俄劈殴炯狒荔性野钢唐札秉泌颐痰洱球预欧悠骤芷酥缪剌窖式具届盾陌裸缮扉剽薮把智禁跃澄锵莓嵩篡蔻被压苍侵仓贾辕缅沬捂老系脱丹匪逗骇朕驭锾公青渐鑑宵寓巍蟋辇苳龙贵仙泽钮咚糗濒贮夤程顺泪薪岗璞扛剔妲璐论负触逝荡烫杏局盥恚及魔途彦卸铅茁钍莞沝别适财后旨啸琵肋阖氦给哇箱召粽炳礁噩筏颚听测厌吕贸屿秽佢炖遢水慢籍碧舌竖岔揖纭渤重怀冰晨历惶僻圳雩舀体懂涛辨叮仕焊芜涧猕做史订植咒挪嗡亵筐碉校配哭痴钥栅诵崭藕呣里呜稳瑰苹迄瞌踅垓矬常味析钓祭顷捌蜻垛菈东亦杰轩屈窄遁坞齁氰风医坚勤陋鸥赃绫鐽韭您迎桥珠雀鲢涡冶馅帘湾舞懒浓睹郊琮惦芮谒啦恋贤悟媚倩卯梧菠噤见细丝磨娜兜锯罣绥蓑解灌露剪诱茧扔殆躄蹼等甲森逼衷磊苏兀谆棹部帝危玄菁抒邹讼琅焢原句占暖殿夷莅臼汨拧月属茶躲撕绰隘踮鮭臾美灵惯洛蠢溯蹋炙啜疝先评尘症惟拙湛雌晤蛭管骑布挡嚣僚昼啧惬捀区宜爸敝踊芙岫褒苞烊错败阶碍跨杖蛰竺毗绁音左夏亨膀溃桩匈倏衹否追谊逊筒凶藐葳哮邈啊狂瓶蜜纹鸽汲旱伎踽找敢哩盼乳妒禄骰杞尻网春惨姆仗沌皂阉歛淙乐狗械赋轴祺濑甭荃銂让际隐彬撤呐绒欣呷嘹通遇丰壁潭卦耽霏麴夆入族旅缴佛聆粪酪糜涪期群椰捷桂栖粤雍旳肓选痛亡乏愤蝇卤饪绯颳较右汽戒捧佮曜勋饯庖四康贝憾袖唾懋煦颦鸢场佳娘滴埃汇咎漓煇炤由杨寒桑壹楣痘娴荀跺书木遭菲赫匠聂揪悱愍它病吹嫌谦蛛垢囝鸾啷快戏暑愉汇悼瞳婵亩讴从项珍爬魏舜闵佼龊壑欢抓零恼粹耿睿玟仞辘数徵刊删傅瞄跤荤愫胛表善邮叹寮芋鉴俘灶绛怎官村抵猴瞒躬癖栩匾至护乃棚衰竭斟瞋浬臊立博予摘辜茵淇咄靦壅内补赖蒋恳吼莒幢坍睇合石摇箭桶苛毯迂嗖忉目尔纳夕吋浸幸蓊冽刈望营烟翁衫拯骋疹偌蹙认历伦牲瞬克岱儸巿泵几只尾迹冻豆庐桔蒨珣社按狼勉猎沛殃讹隋孃告妹浮莱琼掠橄籐劾畦更里骨洁卿廊恤眯裱蠋版编杯贪戚凸叽猖蜃戍度岁隔恰卓搅鳞泄蚌蝎考择洪曰殖俺蒙凿吆羡喜温织侨泼酌芥咻毘兀头守询沧譬倡榄晏鳍靳难血振咖翰朦楷诬钏殁光领忽唷刮蕉硫漪潦伕买寻索扣斌暱苔辫钵蹒今田惠采枉焕麒蔺嗙佚身养峰奔梁掏椎症龈囱许谓席泳庞蝉禹妾柒嘤弟居喵迹闽焰喙琇娼趺若异胡涯宅狄厘蜓脕贀算雨租夺麟绳袅烽徛脩记止款抄宰惰亥舔倔砾代跳扰疗梭芽倌娣唏臬统君企署纠裹吭汶黴罄处烂刺誓丛宛诃诏碾艋完优芳盃雕御裔侈瞰邬号封鼠骚澳赎梓膺蝗掣接拜折翼毙燥蓦渚魇钨言恶频屠颖滔岩槌譁缭政啥冒咪腔贬帜鞘钿糟玩浪痴雾伫悍瓣噬悻撬师核阴涉躺袂狡咐螫噪字聊哲锺划坟惕璀唧矕并急针踢寺颉蒙肪觑哆男状伊谋炼啤怯羚箩脍计陆寂牺胃押嫩羿窠粼谁激嘴焦昂尴龚葫薏孑山模倚涵勋颤嚎箔踱氐张攻霸础骄钝豚庇浯嗄党忙扬绕卑腥埠俪腆痉每良沉俱蚂缔暸嘱烸赣且剧悔霹墓粮唆颅睫揩结牛虫坜冥哑妃玺谧芊改垒菜唬妄槟瓢褐舫昝非增距氏董簿蹄擂瘪蹑星维复彻淋斧厮遑晌鼬连静鼓吝卢肿讥萦埵甥哈阵摩曼偿纶啃罹乒拄建抱郑寿姻僵琶粘刽荧放势庄粉砸齣愿栗娉狰直严副廉践辖噱钊捻鲛转词页炎殷蹲狷彪谟躂报亚烧祸润敷搪瘀锄謢活夫弱耗铜喘氢蛾閤趐设签暂炮盲扎橙馁屹陛变悲剩啡扎酿咆洹哽詘指密豆肚驳佑靡谕蜿苹气幕探贡湿肖砌胚逄拺研毒耐鼻凑愈筷卉姗靼陈厂祖挖炒隧兑拇獗愔试爽遍貌尿嗜溼炽帑捩西缘萧捐穴檬呸睦蹶硐五店握融蟑迳镀鲨桧稹希吴愁筋拓碌踹碴鼾淩取兰龟云诡襟冢辟陲顸神睡哀稣谬凋祟漱窿桎化致发捡淫圭懈窒箇刎物江延饱荡寇术惺呆榭王宿库铃鼎污搓谲蝌蠕战翻隆雳斩哨攸勦砺埂近香盟鸣尧倪橡迺蛟迵世蛮傻奉伪筠膛臀桢罡受警眉燃饿桦俞痪匝颢义控固饰驰诈祉褔夯圜反赵秘绘蚊姜冀渠乓赁单冷卷黎瘟旬炊弋偬墬死威搭卷肢秃瓷咸谏纔任微昭恢挫脂遐狸弭刨跟坐宁瞧槽噢揽吽俸筊便周托茫扶撼鹭痔烨彊空宗辩幅兆衅茄霭弼筌林普覆迪僧庚蜢轼磺葄士登吵柳昧炫塘姥捆蹊台母耳瑜螂谭郡璁磐壼却络閒矛匹惭韬钙荏欉北午拨吊芝涩挟漾吒谖队恐沈侯奸崔牟跛崁胫功套升玛聘贷糙翎泱宕必巴胖撑眷胡阎磷谑珪声杂丁薄熙晒旻嗳洼椆写创妙敦猩琉赘吩嵌揶平旧残挤癢捏霆敕栓蓼影辑违墨帖绮呎氮踵赀业幸稍琪贫膝炭鲍鞦屄金剑媒凌贿拭霄俟酯觎档亮忧侧扑暗媳婿钾鹧片述销枫笼醋瘤尪茸雕讨堂恩嗨丘膨猿谚弛掴色酒颜梯颠杠颺恺葯賸容丽船梁讶鑫煚裴萏扈央牌奈廷玮瀑铠汞滢淬妳仔映儒尹喃蝠剿玠贲向脚井咬詗剖钜瞥鹬蝣市突拼岚柱袜苓氯钲綑则搞屋览袁逾傀桨跻潸员父乘兔漆涅烬仝嬷瘐兴俊京怖毋扳墅瀛蚪玎利暴藉稿辣惘璇骸鳅辍强防洞齿棍凳困钳燊赈白吉川狱矩呃愣镕捱鸲价礼宪爷佐掘恬靓狩嘀安素拟迈澡捍嫉漩骼昃呵招寝闷渊榔琐攘掬婬特草塞乔痞窍嫂垣酝囿思周倍姿矮蜗淼荻祀坳叫房户踪戈旷梳咯琛滮总餐摆宾勃梵憎篑獭蔘办虑桌家吞暇搂茗箝饨保充域弘肆稻藻桓菡雹花府劳韵抖柠酵浒隹畀议背赚岭咳抉屉桠邝渭传典皇咦亭辗陡珀楔掔元仁逃裤淘蔚摺痠缱綩求漫鸿壳穗钩箫靴诒胝份景横孝黏卜飨咀婶搾件绍牙仇冈莺桐谷擘軂持诸拖誉歧匡蚱矗愠觊万琴齐妮屑蜘曦瘴釆崽未忆农惧拢祯璧璟稔沓究援滚促潇哔偈籽槭褛决尤障驶谐窟蹦晒摃衮投缺搬疼遣亟昶沥帷傩哪扁奶凶诊谛咙弩黉虌喔骂乌粗祈溢铮洸镰嗲笑纯了耍霜黛嗤婪鼹柰猫惜松糕熬晦戌翊芎鏖组授戴仲饶伶屌背埤崴独皮谱裂闯逮耘俑邢濠级松酷吟婉傍裳磕呓鶩走委棋陀致葱啾暐缥忒支湖吓赌雁刁嵘撩骛揄曾诚摸爵觅堤胺峥铀挛标麻额哉讽恍笃鹊偃缰流置瓜亏膜匣烹昕闾锉竹靠役锅挣谍巩寐恫筵兄继怨刷斤禧厝徙瞿鸪阿判染旭帆轿疚遴蟒糠室益迫晴铺耸鸶濯淦礴卡波醉蝶凄瀚汹堉湮亳马姐锁阔瑟斐蔷跋涤幔共既震洩艇忿沐陨琥宓需射床顽壶泓咽丕轧瓒海欲闹牧苑拐烙簇槙陕口刻佩契悬驴畸鹂忝腱门堆牠轰詹罕讳笋崧誏般释徐羞诠沫揍鬓诌忾线含尺拾滤绽曙竑飒鳌语承干锦掰刃铐绎喋玷命退潮逆稚窈朔镍舶谗观莫帽堕辰渝涓阕箕鬟视刘盛夹募仄睬燿墩栲朋昨孙枝懿瑛矶胥哒篓联旁屁瓦慨葵岐蚓晾旌参纪净舟哼噜凄嗔砷幄格赶凯悦汁绣鲫嬴濡翳黄制撞惹佬奕楞榷猾棻钱尚迴疏纤窥鲤尸阂荞修艺损锐肃浏荆蜍韆靛失肉伙翘遨隶偕夙琍铛儿律牵哎渔蔽徜睐宦唅住铁厉综恕仟饥蚯樕轭八奏惑纲蝴敛肮谩鲷壕脑树羊扇垫丞蔼璜佞褟板毛冬驻昱诘辙湄叟羌吃罪桃屏竿鳖恁鳗团撂另笔舰堪缝疤霈棕沅犷换彩眠弥蹈膏诛笺疡讫即注伍贯鞭锥鞠垚啬洵象归溪愚仆窕茉蛊眈锭料弹飘抬豫皱煜讷肴髻录虎泰喂岩晰傭鸵豨齰拿卫宋靖辐晖嗓痹囤胼专刀圈狠歹舅酹殉裆桹远皆竞饼甄孰昙墟蕨砝速键闪凝斑煽铨旄胱涔基售纵邻淹姚艳檀愎仃帮块崇擦崎钞绷竣稼黔形险滑滋骏袱峨熹嵋昂确荣乙坤薰绊揉沂瑙涸候播俗蛙婷焚珈峭稷婀装施浅灾宠芦鹃葾忖搀孩铭莲莎棵咸诲拈荟梏备罗紫毅弓沮臆隍妩蛔歌汉沟卒犬呕焰鞑嚏偆界赏旋汝涂瞪隽嗅箴纂除欣摄征刹淳熔佯绻堀南升聪赠郁丐堇蚣湍倬器叶毁斗坎茹韧躏爰晟画萤庭抛煎盘扒雇颔紘诉载麦秦螺菱憨乩痧锒差嘿描辱遮篠舵麓戕琱讲弄妨涂枯涕肛酗绢玹类钟勒披台衬戊寅嗝凊英付仪允昔蚀坝洒褓寤案寄陪侦瘾溉抠媲梆鲔带鬼榜欲蒂瑄骷瞩晞囥久哦板夥坠翟碘钡锢珞乎灯慕朗唔怠鞍诽剁蚜掉呆耀笛瞎钰冕拗慑豋迷洋献劫筝躯榨朴嗟搵量嘻审魅唇肺肘罔泷倨引布蟹钦表掷羔螳诤皕整磁巷慰吁丑哺撮暝戡似荐谅荷冤奢霓睽帼迤耶检姊挺祷荫巳渍牴埼奇派逐矣甩靶铲摹琏膑制构踏迅伞纱蚵扪昴儆边妈岸禅酱芸惆搧诩擤型蓝葛迁范佰驹蹂篆纨超贴卧鹿焉峻撷媄攫忻识猪洽秤娇阱稽纾甯蠔虽策寞彭驼哄羹蔗睨熇怪纸邦肩沦肾纺晔缎囍飞暗藤赞碳庄蜕隼蹬毐始巧拳丙沾囡趾惮犁瓯品努阻鹅抚阑吊睭蛆祚运雷蝎痕溶戳豁箍诋蜉赛架面液叠腕褪奚缨骈费享殊涨几菸癸掳睾怼梦宣凭巡蜡凹眨咿婢褊故逢拒烤涌蟾臻渎傥镑班均池贱氧蒐慷霾霁熏权担邪丈弦呱蝙叨琅俚破启航趋娱巾胧邃熏恪验济驱沿皓雏沼稠啻觔眼罢裁滥奴螃舱淮捎鎯满呼翔措颓盯柚骁皿踫念划填么嘎馈抨咩暄弁造伟奥扭趟垄葭岑躅啣军岛函捉揭毓枷聿吃锟精歉镇碗噹犀靥吮宥芍务郭丌炉剥逞硝铳埕蕁留训宽脏垦姨绚癫涣擢服穿颇叔狭穆绞敖怦盹六详枪秘魁樵缆蜈傧听图沙遥腰坊阀讪钣鲥旸收督穹漠盐弥褚滂迸斡舍梅啪翅屎跷砗酉釜痍半顾阅余郝搁嫣刍踯忸读敌锋胶佩隙蒲谙簑轾"


    },
    en: {
        newChat: "New Chat",
        placeholder: "Type a message, press Enter to send, Shift + Enter for new line",
        thinking: "Thinking...",
        aiThinking: "AI is thinking...",
        deepThink: "Deep Think",
        webSearch: "Web Search",
        serverBusy: "Server is busy, please try again later",
        welcome: "Hello! I'm DeepSleep, an AI assistant. How can I help you?",
        thinkingTime: "Thinking time: ",
        seconds: "s",
        chatDisabled: "Chat is disabled",
        streamingInProgress: "Response in progress, please wait...",
        maxChatsReached: "Maximum number of chats reached. Please delete some old chats and try again.",
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!? "
    }
};
async function streamResponse(response, messageElement, isDeepThink = false, thinkingTime = null) {
    if (isStreaming) return;
    isStreaming = true;

    try {
        let index = 0;
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        const thinkingStatus = messageElement.querySelector('.thinking-status');
        if (thinkingStatus) {
            thinkingStatus.remove();
        }
        messageElement.style.display = 'block';
        messageElement.style.textAlign = 'left';
        messageElement.classList.add('streaming');

        if (isDeepThink) {
            messageElement.textContent = translations[currentLanguage].aiThinking;
            await delay(1000);
        }
        messageElement.textContent = '';
        if (isDeepThink) {
            messageElement.textContent = translations[currentLanguage].serverBusy;
        } else {

            while (index < response.length) {
                messageElement.textContent = response.substring(0, index + 1);
                index++;
                await delay(100);
            }
        }

        if (isDeepThink && thinkingTime !== null) {
            const thinkingTimeDiv = document.createElement('div');
            thinkingTimeDiv.className = 'thinking-time';
            thinkingTimeDiv.textContent = `${translations[currentLanguage].thinkingTime}${thinkingTime}${translations[currentLanguage].seconds}`;
            messageElement.appendChild(thinkingTimeDiv);
        }
        await delay(500);
    } catch (error) {
        console.error('Error in streamResponse:', error);
    } finally {
        messageElement.classList.remove('streaming');
        isStreaming = false;
        disableAllControls(false);
    }
}


function disableAllControls(disable) {
    document.getElementById('zhBtn').disabled = disable;
    document.getElementById('enBtn').disabled = disable;
    document.getElementById('newChatBtn').disabled = disable;

    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        item.classList.toggle('disabled', disable);
        item.style.pointerEvents = disable ? 'none' : 'auto';
    });

    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const inputBox = document.getElementById('inputBox');
    const optionBtns = document.querySelectorAll('.option-btn');

    if (disable) {
        userInput.disabled = true;
        sendButton.disabled = true;
        inputBox.classList.add('disabled');
        optionBtns.forEach(btn => btn.disabled = true);
    } else {
        userInput.disabled = false;
        sendButton.disabled = !userInput.value.trim();
        inputBox.classList.remove('disabled');
        optionBtns.forEach(btn => btn.disabled = false);
    }
}

function createMessage(text, isUser = false, thinkingTime = null) {
    const safeText = String(text).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return {
        text: safeText,
        isUser: isUser,
        timestamp: new Date().toISOString(),
        thinkingTime: thinkingTime ? Math.min(Math.max(0, thinkingTime), 3600) : null
    };
}

function updateDateTime() {
    const now = new Date();
    const formattedTime = now.getFullYear() + "-"
        + String(now.getMonth() + 1).padStart(2, '0') + "-"
        + String(now.getDate()).padStart(2, '0') + " "
        + String(now.getHours()).padStart(2, '0') + ":"
        + String(now.getMinutes()).padStart(2, '0') + ":"
        + String(now.getSeconds()).padStart(2, '0');

    document.getElementById('currentTime').textContent = formattedTime;
}

function toggleOption(option) {
    if (!isStreaming && !isWaitingResponse) {
        options[option] = !options[option];
        document.getElementById(`${option}Btn`).classList.toggle('active');
        document.getElementById('userInput').focus();
    }
}

function addChatToList(chatId, title = null) {
    const chatList = document.getElementById('chatList');
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item' + (currentChatId === chatId ? ' active' : '');
    chatItem.dataset.chatId = chatId;

    const defaultTitle = translations[currentLanguage].newChat;
    title = title || defaultTitle;

    chatItem.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
        </svg>
        ${title}
    `;

    if (!isStreaming) {
        chatItem.onclick = () => selectChat(chatId);
    }

    if (chatList.firstChild) {
        chatList.insertBefore(chatItem, chatList.firstChild);
    } else {
        chatList.appendChild(chatItem);
    }

    chatTitles.set(chatId, title);
}

function updateChatTitle(chatId, title) {
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        if (item.dataset.chatId === chatId.toString()) {
            const svg = item.querySelector('svg').outerHTML;
            item.innerHTML = svg + title;
        }
    });
    chatTitles.set(chatId, title);
}

function renderChat(chatId) {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.innerHTML = '';

    if (!chats.has(chatId)) {
        chats.set(chatId, [
            createMessage(translations[currentLanguage].welcome, false)
        ]);
    }

    const messages = chats.get(chatId);
    messages.forEach(msg => {
        const messageGroup = document.createElement('div');
        messageGroup.className = 'message-group';

        const messageContent = msg.thinkingTime !== null ?
            `${msg.text}\n\n<div class="thinking-time">${translations[currentLanguage].thinkingTime}${msg.thinkingTime}${translations[currentLanguage].seconds}</div>` :
            msg.text;

        messageGroup.innerHTML = `
            <div class="message-wrapper ${msg.isUser ? 'user' : 'assistant'}">
                <div class="message-role ${msg.isUser ? 'user-role' : 'assistant-role'}">
                    ${msg.isUser ? 'U' : 'A'}
                </div>
                <div class="message-content">${messageContent}</div>
            </div>
        `;
        chatContainer.appendChild(messageGroup);
    });

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function selectChat(chatId) {
    if (isStreaming || isWaitingResponse) {
        alert(translations[currentLanguage].streamingInProgress);
        return;
    }

    document.querySelectorAll('.chat-item').forEach(item => {
        item.classList.remove('active');
    });

    const selectedChat = document.querySelector(`.chat-item[data-chat-id="${chatId}"]`);
    if (selectedChat) {
        selectedChat.classList.add('active');
    }

    currentChatId = chatId;
    renderChat(currentChatId);
}
function switchLanguage(lang) {
    if (isStreaming) {
        alert(translations[currentLanguage].streamingInProgress);
        return;
    }

    currentLanguage = lang;
    document.getElementById('zhBtn').classList.toggle('active', lang === 'zh');
    document.getElementById('enBtn').classList.toggle('active', lang === 'en');

    document.getElementById('newChatBtn').innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14m-7-7h14"></path>
        </svg>
        ${translations[lang].newChat}
    `;
    document.getElementById('userInput').placeholder = translations[lang].placeholder;
    document.getElementById('deepThinkBtn').innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a10 10 0 0 1 10 10c0 4.42-2.87 8.17-6.84 9.5a2 2 0 0 1-2.32 0C8.87 20.17 6 16.42 6 12A10 10 0 0 1 12 2z"/>
        </svg>
        ${translations[lang].deepThink}
    `;
    document.getElementById('webSearchBtn').innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
        </svg>
        ${translations[lang].webSearch}
    `;

    if (currentChatId) {
        renderChat(currentChatId);
    }
}

function generateRandomText(length) {
    const safeChars = translations[currentLanguage].chars;
    const maxLength = Math.min(length, 2000);
    let result = '';
    for (let i = 0; i < maxLength; i++) {
        result += safeChars.charAt(Math.floor(Math.random() * safeChars.length));
    }
    return result.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function calculateResponseLength(inputLength) {
    const minLength = Math.max(20, inputLength);
    const maxLength = Math.min(1000, inputLength * 5);
    const baseLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const weight = Math.min(5, Math.max(1, inputLength / 100));
    return Math.floor(baseLength * weight);
}

async function sendMessage() {
    if (isStreaming || isWaitingResponse) return;

    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;


    disableAllControls(true);

    const currentChat = chats.get(currentChatId);
    currentChat.push(createMessage(message, true));

    if (currentChat.filter(msg => msg.isUser).length === 1) {
        const title = message.length > 20 ? message.substring(0, 20) + '...' : message;
        updateChatTitle(currentChatId, title);
    }

    renderChat(currentChatId);
    input.value = '';


    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    messageGroup.innerHTML = `
        <div class="message-wrapper assistant">
            <div class="message-role assistant-role">A</div>
            <div class="message-content"></div>
        </div>
    `;
    document.getElementById('chatContainer').appendChild(messageGroup);
    const messageContent = messageGroup.querySelector('.message-content');
    let thinkingTime = 0;

    if (options.deepThink) {
        thinkingTime = Math.max(3000, Math.min(10000, message.length * 50));
    }


    if (options.webSearch) {
        const extraTime = Math.max(2000, Math.min(10000, message.length * 20));
        thinkingTime += extraTime;
    }

    if (thinkingTime > 0) {
        isWaitingResponse = true;
        messageContent.className = 'message-content thinking';
        messageContent.innerHTML = `
            ${translations[currentLanguage].aiThinking +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}
            <div class="thinking-status">
                <div class="thinking-indicator"></div>
                <span id="thinkingTimer">0${translations[currentLanguage].seconds}</span>
            </div>
        `;

        document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight;

        const startTime = new Date();
        const thinkingTimer = document.getElementById('thinkingTimer');

        const updateThinkingTime = () => {
            if (!isWaitingResponse) return;
            const elapsed = Math.floor((new Date() - startTime) / 1000);
            thinkingTimer.textContent = `${elapsed}${translations[currentLanguage].seconds}`;
        };

        const thinkingInterval = setInterval(updateThinkingTime, 1000);
        updateThinkingTime();

        currentTimer = setTimeout(async () => {
            clearInterval(thinkingInterval);
            isWaitingResponse = false;

            const elapsedSeconds = Math.floor((new Date() - startTime) / 1000);
            const responseLength = calculateResponseLength(message.length);
            const response = generateRandomText(responseLength);

            const newMessage = createMessage('', false, elapsedSeconds);
            currentChat.push(newMessage);

            await streamResponse(response, messageContent, options.deepThink, elapsedSeconds);
            newMessage.text = response;
        }, thinkingTime);
    } else {

        const responseLength = calculateResponseLength(message.length);
        const response = generateRandomText(responseLength);
        const newMessage = createMessage('', false);
        currentChat.push(newMessage);
        await streamResponse(response, messageContent);
        newMessage.text = response;
    }
    document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight;
}

function newChat() {
    if (isStreaming || isWaitingResponse) {
        alert(translations[currentLanguage].streamingInProgress);
        return;
    }

    if (chatCount >= maxChats) {
        alert(translations[currentLanguage].maxChatsReached);
        return;
    }

    chatCount++;
    currentChatId = chatCount;
    addChatToList(chatCount);
    renderChat(currentChatId);
    document.getElementById('userInput').focus();
}


document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (this.value.trim() && !isStreaming && !isWaitingResponse) {
            sendMessage();
        }
    }
});

document.getElementById('userInput').addEventListener('input', function () {
    document.getElementById('sendButton').disabled = !this.value.trim() || isStreaming || isWaitingResponse;
});
window.onload = function () {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    newChat();
};
