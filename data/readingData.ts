import { ReadingArticle, ProficiencyLevel } from '../types';

export const STATIC_READING: Record<ProficiencyLevel, ReadingArticle[]> = {
  A1: [
    {
      id: 'a1-1',
      level: 'A1',
      title: { fr: "Ma routine quotidienne", zh: "我的日常生活" },
      paragraphs: [
        {
          fr: "Je m'appelle Lucas et j'habite dans un petit appartement à Lyon. Ma routine commence chaque matin à six heures et demie très précises. Le réveil sonne et je me lève tout de suite pour faire un peu de sport dans mon salon. Ensuite, je vais dans la cuisine pour préparer mon petit-déjeuner. Je bois un grand café au lait et je mange deux tartines avec du miel. J'adore regarder par la fenêtre parce que le soleil se lève doucement on la ville.",
          ipa: "/ʒə ma.pɛl ly.ka e ʒa.bit dɑ̃z œ̃ pə.ti a.paʁ.tə.mɑ̃ a ljɔ̃. ma ʁu.tin kɔ.mɑ̃s ʃak ma.tɛ̃ a siz œʁ e də.mi tʁɛ pʁe.siz. lə ʁe.vɛj sɔn e ʒə mə lɛv tu dʁwa puʁ fɛʁ œ̃ pø də spɔʁ dɑ̃ mɔ̃ sa.lɔ̃. ɑ̃.sɥit, ʒə vɛ dɑ̃ la kɥi.zin puʁ pʁe.pa.ʁe mɔ̃ pə.ti de.ʒœ.ne. ʒə bwa œ̃ ɡʁɑ̃ ka.fe o lɛ e ʒə mɑ̃ʒ dø taʁ.tin a.vɛk dy mjɛl. ʒa.dɔʁ ʁə.ɡaʁ.de paʁ la fə.nɛtʁ paʁs.kə lə sɔ.lɛj sə lɛv du.sə.mɑ̃ syʁ la vil/",
          zh: "我叫卢卡斯，住在里昂的一个小公寓里。我的日常生活每天早上准时六点半开始。闹钟一响，我立刻起床，在客厅做一会儿运动。然后，我去厨房准备早餐。我喝一大杯拿铁咖啡，吃两片涂有蜂蜜的面包。我喜欢望向窗外，因为太阳正在城市上空缓缓升起。"
        },
        {
          fr: "À huit heures, je quitte ma maison pour aller au bureau. Je prends le métro parce que c'est très rapide et pratique pour traverser le centre. Pendant le trajet, je lis souvent un livre ou j'écoute de la musique française sur mon téléphone. Mon travail est intéressant mais parfois un peu fatigant car j'ai beaucoup de réunions. Je travaille avec une équipe très sympathique. À midi, nous déjeunons ensemble dans un petit restaurant italien juste à côté du bureau.",
          ipa: "/a ɥit œʁ, ʒə kit ma mɛ.zɔ̃ puʁ a.le o by.ʁo. ʒə pʁɑ̃ lə me.tʁo paʁs.kə sɛ tʁɛ ʁa.pid e pʁa.tik puʁ tʁa.vɛʁ.se lə sɑ̃.tʁə. pɑ̃.dɑ̃ lə tʁa.ʒɛ, ʒə li su.vɑ̃ œ̃ livʁ u ʒe.kut də la my.zik fʁɑ̃.sɛz syʁ mɔ̃ te.le.fɔn. mɔ̃ tʁa.vaj ɛ ɛ̃.te.ʁɛ.sɑ̃ mɛ paʁ.fwa œ̃ pø fa.ti.ɡɑ̃ kaʁ ʒe bo.ku də ʁe.y.njɔ̃. ʒə tʁa.vaj a.vɛk yn e.kip tʁɛ sɛ̃.pa.tik. a mi.di, nu de.ʒœ.nɔ̃ ɑ̃.sɑ̃bl dɑ̃z œ̃ pə.ti ʁɛs.tɔ.ʁɑ̃ i.ta.ljɛ̃ ʒyst a ko.te dy by.ʁo/",
          zh: "八点钟，我离开家去办公室。我乘地铁，因为穿过市中心非常快速且方便。在途中，我经常看书或用手机听法语音乐。我的工作很有趣，但有时有点累，因为我有很多会议。我和一个非常友好的团队一起工作。中午，我们在办公室旁边的一家意大利小餐馆一起吃午饭。"
        },
        {
          fr: "L'après-midi, je retourne à mes dossiers importants. Je réponds aux courriels et je participe à quelques discussions techniques. Vers seize heures, je fais une petite pause pour boire un verre d'eau et manger une pomme. C'est le moment où je commence à être un peu fatigué, mais je reste concentré on mes tâches jusqu'au bout. Je termine ma journée de travail à dix-huit heures précises. Je range soigneusement mon bureau et je dis au revoir à tous mes collègues.",
          ipa: "/la.pʁɛ mi.di, ʒə ʁə.tuʁn a me dɔ.sje ɛ̃.pɔʁ.tɑ̃. ʒə ʁe.pɔ̃ o ku.ʁjɛl e ʒə paʁ.ti.sip a kɛl.kə dis.ky.sjɔ̃ tɛk.nik. vɛʁ sɛz œʁ, ʒə fɛ yn pə.tit poz puʁ bwaʁ œ̃ vɛʁ do e mɑ̃.ʒe yn pɔm. sɛ lə mɔ.mɑ̃ u ʒə kɔ.mɑ̃s a ɛtʁ œ̃ pø fa.ti.ɡe, mɛ ʒə ʁɛst kɔ̃.sɑ̃.tʁe syʁ me taʃ ʒys.ko bu. ʒə tɛʁ.min ma ʒuʁ.ne də tʁa.vaj a di.zɥit œʁ pʁe.siz. ʒɑ̃ʒ swa.ɲøz.mɑ̃ mɔ̃ by.ʁo e ʒə di o ʁə.vwaʁ a tu me kɔ.lɛɡ/",
          zh: "下午，我回到重要的文件工作中。我回复邮件并参加一些技术讨论。下午四点左右，我休息一会儿，喝杯水并吃个苹果。这时我开始感到有点累，但我会一直保持专注直到任务完成。我准时在晚上六点结束工作。我仔细整理好办公桌，和所有同事说再见。"
        },
        {
          fr: "Le soir, je rentre chez moi vers dix-huit heures et demie. Je fais quelques courses au supermarché du quartier pour préparer le dîner. J'aime cuisiner des plats simples comme des pâtes ou du poisson frais. Après le repas, je me repose sur le canapé et je regarde un film ou je téléphone à mes parents. C'est important de se détendre après une longue journée. Je me couche vers vingt-deux heures pour être en forme le lendemain matin.",
          ipa: "/lə swaʁ, ʒə ʁɑ̃.tʁə ʃe mwa vɛʁ di.zɥit œʁ e də.mi. ʒə fɛ kɛl.kə kuʁs o sy.pɛʁ.maʁ.ʃe dy kaʁ.tje puʁ pʁe.pa.ʁe lə di.ne. ʒɛm kɥi.zi.ne de pla sɛ̃pl kɔm de pat u dy pwa.sɔ̃ fʁɛ. a.pʁɛ lə ʁə.pa, ʒə mə ʁə.poz syʁ lə ka.na.pe e ʒə ʁə.ɡaʁd œ̃ film u ʒə te.le.fɔn a me pa.ʁɑ̃. sɛ ɛ̃.pɔʁ.tɑ̃ də sə de.tɑ̃dʁ a.pʁɛ yn lɔ̃ɡ ʒuʁ.ne. ʒə mə kuʃ vɛʁ vɛ̃t.dø zœʁ puʁ ɛtʁ ɑ̃ fɔʁm lə lɑ̃.də.mɛ̃ ma.tɛ̃/",
          zh: "晚上，我大约在六点半回家。我在社区超市买点东西准备晚餐。我喜欢做简单的菜，比如意面或新鲜的鱼。饭后，我在沙发上休息，看场电影或给父母打电话。漫长的一天后，放松是很重要的。我大约在十点睡觉，以便第二天早上保持精力充沛。"
        }
      ],
      keywords: [
        { word: "routine", ipa: "/ʁu.tin/", zh: "日常事务" },
        { word: "appartement", ipa: "/a.pa.ʁtə.mɑ̃/", zh: "公寓" },
        { word: "réveil", ipa: "/ʁe.vɛj/", zh: "闹钟" },
        { word: "pratique", ipa: "/pʁa.tik/", zh: "实用的/方便的" },
        { word: "détendre", ipa: "/de.tɑ̃dʁ/", zh: "放松" },
        { word: "lendemain", ipa: "/lɑ̃.də.mɛ̃/", zh: "第二天" }
      ]
    },
    {
      id: 'a1-2',
      level: 'A1',
      title: { fr: "Une visite au Musée du Louvre", zh: "参观卢浮宫" },
      paragraphs: [
        {
          fr: "Aujourd'hui, c'est un jour très spécial car je visite le musée du Louvre avec mes meilleurs amis. C'est le plus grand musée de Paris et il est absolument magnifique. Nous arrivons devant la grande pyramide de verre à dix heures du matin. Il y a déjà beaucoup de touristes du monde entier, mais l'organisation est excellente. Le ciel est bleu et le soleil brille on les vieux murs du palais historique. Je suis très impressionné par l'architecture majestueuse.",
          zh: "今天是一个非常特别的日子，因为我和我最好的朋友们一起参观卢浮宫。它是巴黎最大的博物馆，绝对非常壮丽。我们上午十点来到巨大的玻璃金字塔前。这里已经有很多来自世界各地的游客，但组织工作非常出色。天空湛蓝，阳光照在古老历史宫殿的墙壁上。宏伟的建筑给我留下了深刻的印象。"
        },
        {
          fr: "À l'intérieur, il y a des milliers d'œuvres d'art inestimables. Nous cherchons d'abord la célèbre Joconde de Léonard de Vinci dans la grande galerie. La peinture est un peu plus petite que je pensais, mais elle est vraiment fascinante à regarder. Ensuite, nous admirons les sculptures grecques comme la Vénus de Milo et les objets de l'Égypte ancienne. Les salles sont immenses et très richement décorées avec des plafonds peints. Je prends beaucoup de photos pour mes souvenirs.",
          zh: "在馆内，有成千上万件无价的艺术品。我们首先在大画廊寻找列奥纳多·达·芬奇著名的《蒙娜丽莎》。这幅画比我想象的要小一点，但看起来真的很迷人。随后，我们欣赏了米洛的维纳斯等希腊雕塑以及古埃及的文物。展厅巨大，装饰极其华丽，还有彩绘天花板。我拍了很多照片留作纪念。"
        },
        {
          fr: "Nous découvrons ensuite les appartements de Napoléon III. C'est un décor très luxueux avec beaucoup d'or et de velours rouge partout. On peut imaginer la vie des rois et des reines dans ce palais historique il y a longtemps. Les lustres en cristal brillent intensément dans les grandes salles de réception. Je reste longtemps à regarder les détails des meubles anciens et des tapis précieux. C'est comme faire un véritable voyage dans le temps. Mes amis sont aussi fascinés que moi.",
          zh: "接着我们发现了拿破仑三世的套房。那里的装饰非常奢华，到处都是黄金和红丝绒。我们可以想象很久以前国王和王后在这座历史宫殿里的生活。水晶吊灯在巨大的接待厅里闪烁着强烈的光芒。我驻足良久，观察古董家具和珍贵地毯的细节。这就像是一场真正的穿越时空之旅。我的朋友们也和我一样着迷。"
        },
        {
          fr: "After trois heures de marche, nous avons un peu faim. Nous décidons d'aller au café du musée pour faire une petite pause. Je bois un thé chaud et je mange une délicieuse pâtisserie française. Nous discutons de nos œuvres préférées et nous nous reposons un peu avant de sortir. Le Louvre est vraiment un trésor pour l'humanité entière. Nous promettons de revenir bientôt pour explorer les autres sections. Je sors du musée très heureux et avec beaucoup de nouvelles connaissances.",
          zh: "步行三个小时后，我们有点饿了。我们决定去博物馆咖啡馆休息一会儿。我喝了热茶，吃了一份美味的法式糕点。我们讨论了最喜欢的作品，并在出去前休息了一下。卢浮宫确实是全人类的宝库。我们约定很快再来探索其他展区。离开博物馆时我非常开心，也增长了很多新知识。"
        }
      ],
      keywords: [
        { word: "musée", ipa: "/my.ze/", zh: "博物馆" },
        { word: "magnifique", ipa: "/ma.ɲi.fik/", zh: "壮丽的" },
        { word: "pyramide", ipa: "/pi.ʁa.mid/", zh: "金字塔" },
        { word: "fascinant", ipa: "/fa.si.nɑ̃/", zh: "迷人的" },
        { word: "trésor", ipa: "/tʁe.zɔʁ/", zh: "宝藏" },
        { word: "connaissance", ipa: "/kɔ.nɛ.sɑ̃s/", zh: "知识" }
      ]
    },
    {
      id: 'a1-3',
      level: 'A1',
      title: { fr: "Le Marché Local", zh: "当地市场" },
      paragraphs: [
        {
          fr: "Le marché local est très animé chaque samedi matin dans mon village. Les étals sont magnifiques et remplis de fruits colorés, de légumes frais, de fromages artisanaux et de fleurs parfumées. C'est une tradition pour les habitants de venir ici très tôt pour choisir les meilleurs produits de la région. On peut voir des pommes rouges, des poires juteuses et des tomates bien mûres. Les vendeurs crient avec enthousiasme pour attirer les clients vers leurs stands.",
          zh: "每个周六早上，我们村里的当地市场都非常热闹。摊位非常漂亮，摆满了色彩鲜艳的水果、新鲜蔬菜、手工奶酪和芬芳的花朵。对于当地居民来说，很早就来这里挑选当地最好的产品是一项传统。可以看到红苹果、多汁的梨和熟透的西红柿。摊主们热情地吆喝着，吸引顾客到他们的摊位前。"
        },
        {
          fr: "Les enfants courent joyeusement entre les allées étroites pendant que leurs parents examinent attentivement les prix et la qualité. On peut sentir partout l'odeur merveilleuse du pain frais qui sort du four. On entend aussi les discussions très animées sur les légumes de saison et les nouvelles du quartier. C'est un moment de rencontre sociale important pour tout le monde ici. Les gens se saluent, discutent de la météo et partagent des recettes de cuisine traditionnelles.",
          zh: "孩子们在狭窄的小巷里欢快地奔跑，而他们的父母则仔细查看价格和质量。到处都能闻到刚出炉的新鲜面包散发出的美妙香味。还能听到关于时令蔬菜和邻里新闻的热烈讨论。对于这里的每个人来说，这都是一个重要的社交时刻。人们互相问候，谈论天气，分享传统烹饪食谱。"
        },
        {
          fr: "Certains vendeurs offrent généreusement des dégustations de fromage de chèvre ou de miel de montagne pour convaincre les clients. Les conversations sont toujours amicales et sincères. Beaucoup de personnes se saluent with un grand sourire chaleureux car elles se connaissent depuis longtemps. On achète souvent un peu plus que prévu parce que tout semble délicieux. J'aime particulièrement acheter une petite barquette de fraises sucrées pour mon goûter de l'après-midi. Le contact direct est vraiment très agréable.",
          zh: "一些摊主大方地提供山羊奶酪或高山蜂蜜的试吃，以说服顾客。交谈总是友好且真诚的。许多人带着灿烂温和的微笑打招呼，因为他们彼此认识很久了。人们买的东西往往比计划的要多一些，因为一切看起来都那么美味。我特别喜欢买一小盒甜草莓作为下午的点心。这种直接的接触真的非常令人愉快。"
        },
        {
          fr: "Le marché est un lieu de rencontre, de partage et de culture locale. Les habitants apprécient énormément ces moments de convivialité et de découverte des bons produits de la terre. C'est l'occasion de soutenir les agriculteurs de notre région. À midi, les paniers sont pleins et le marché commence doucement à fermer. On rentre à la maison avec des sacs lourds mais avec le cœur léger et l'estomac prêt pour un bon repas.",
          zh: "市场是一个聚会、分享和当地文化交流的场所。居民们非常珍惜这些友好共处以及发现优质农产品的时刻。这也是支持我们地区农民的机会。中午时分，篮子都装满了，市场也开始慢慢关闭。人们提着沉重的袋子回家，但心情轻松，胃口大开，准备享受一顿丰盛的大餐。"
        }
      ],
      keywords: [
        { word: "marché", ipa: "/ma.ʁʃe/", zh: "市场" },
        { word: "étal", ipa: "/e.tal/", zh: "摊位" },
        { word: "produit", ipa: "/pʁɔ.dɥi/", zh: "产品" },
        { word: "vendeur", ipa: "/vɑ̃.dœʁ/", zh: "商贩" },
        { word: "dégustation", ipa: "/de.ɡys.ta.sjɔ̃/", zh: "品尝/试吃" },
        { word: "convivialité", ipa: "/kɔ̃.vi.vja.li.te/", zh: "友好/欢乐的氛围" }
      ]
    },
    {
      id: 'a1-4',
      level: 'A1',
      title: { fr: "Une journée à la plage", zh: "海滩的一天" },
      paragraphs: [
        {
          fr: "Le soleil brille intensément dans le ciel bleu et la mer Méditerranée est très calme aujourd'hui. Les enfants jouent joyeusement dans le sable doré tandis que les adultes se détendent confortablement on leurs serviettes colorées. Certains lisent des livres passionnants ou écoutent le bruit relaxant de l'eau. Il fait chaud, donc tout le monde a hâte de se baigner dans l'eau fraîche. La plage est un endroit parfait pour se reposer et oublier tous les soucis de la semaine.",
          zh: "太阳在蓝天中强烈地照射着，今天的地中海非常平静。孩子们在金色的沙滩上快乐地玩耍，而成年人们则舒舒服服地坐在他们彩色的毛巾上休息。有些人正在阅读精彩的书籍，或者聆听令人放松的水声。天气很热，所以每个人都迫不及待地想在清凉的水中游泳。海滩是一个休息和忘记一周所有烦恼的完美场所。"
        },
        {
          fr: "On peut entendre de loin le bruit régulier des vagues et le rire sincère des enfants qui s'amusent. Certains adolescents pratiquent le surf avec courage tandis que d'autres construisent de grands châteaux de sable avec des fossés. Les mouettes volent au-dessus de nous et cherchent un peu de nourriture sur le bord de l'eau. L'air sent le sel marin et la crème solaire protectrice. C'est une atmosphère de vacances typique que j'adore retrouver chaque été with ma famille.",
          zh: "人们可以从远处听到海浪有节奏的声音和孩子们嬉戏时真诚的笑声。一些青少年勇敢地练习冲浪，而另一些人则在建造巨大的沙堡并挖好战壕。海鸥在我们头顶飞翔，在水边寻找一点食物。空气中弥漫着海水咸咸的味道和防护防晒霜的味道。这是我每年夏天都喜欢和家人一起重温的典型度假氛围。"
        },
        {
          fr: "Les familles nombreuses pique-niquent à l'ombre fraîche des grands parasols et partagent des boissons très fraîches et des fruits sucrés. On mange des sandwichs au jambon et on boit de la limonade maison. La journée est remplie de rires, de jeux de ballon et de moments de détente absolue sous le soleil. C'est le moment idéal pour discuter tranquillement ou faire une petite sieste à l'ombre. Tout le monde semble heureux et détendu dans ce cadre naturel magnifique.",
          zh: "大家庭在大遮阳伞清凉的阴影下野餐，分享凉爽的饮料和甜甜的水果。人们吃着火腿三明治，喝着自制的柠檬汁。这一天充满了欢笑、球类游戏和阳光下绝对放松的时刻。这是悠闲聊天或在阴凉处小睡一会儿的理想时刻。在这个美丽的自然环境中，每个人看起来都很快乐且放松。"
        },
        {
          fr: "À la fin de la journée, tout le monde ramasse soigneusement ses affaires pour laisser la plage propre. On admire ensemble le magnifique coucher du soleil qui colore le ciel en orange et en violet. Les couleurs sont incroyables et changent chaque minute. C'est un spectacle naturel que nous n'oublions jamais. Après cela, nous rentrons fatigués mais très contents chez nous. Nous avons hâte de revenir demain pour profiter encore une fois de cette belle plage et de la mer.",
          zh: "在一天结束时，每个人都仔细收拾好自己的东西，以保持海滩干净。我们一起欣赏壮丽的日落，日落将天空染成了橙色和紫色。这些色彩令人难以置信，且每一分钟都在变化。这是一场我们永远不会忘记的自然奇观。在那之后，我们疲惫但非常开心地回家。我们迫不及待地想明天再来，再次享受这美丽的海滩和大海。"
        }
      ],
      keywords: [
        { word: "plage", ipa: "/plaʒ/", zh: "海滩" },
        { word: "sable", ipa: "/sabl/", zh: "沙子" },
        { word: "vague", ipa: "/vaɡ/", zh: "海浪" },
        { word: "surf", ipa: "/syʁf/", zh: "冲浪" },
        { word: "parasol", ipa: "/pa.ʁa.zɔl/", zh: "遮阳伞" },
        { word: "coucher", ipa: "/ku.ʃe/", zh: "日落" }
      ]
    },
    {
      id: 'a1-5',
      level: 'A1',
      title: { fr: "Un dîner en famille", zh: "一次家庭晚餐" },
      paragraphs: [
        {
          fr: "Ce soir, toute ma famille se réunit pour un grand dîner spécial à la maison. Ma mère prépare un délicieux poulet rôti avec des pommes de terre au four. L'odeur de la cuisine est merveilleuse et remplit toutes les pièces. Mon père met la table with soin : il pose les assiettes, les verres et les serviettes blanches. Mes deux frères aident à préparer une grande salade de fruits frais pour le dessert. C'est un moment de preparation très joyeux et animé.",
          zh: "今晚，我的全家聚在一起在家里吃一顿丰盛的特别晚餐。我妈妈正在准备美味的烤鸡配烤土豆。厨房的味道好极了，弥漫在所有的房间里。我爸爸用心地布置餐桌：他摆放盘子、玻璃杯和白色的餐巾纸。我的两个兄弟帮忙准备了一大份新鲜水果沙拉作为甜点。这是一个非常快乐和热闹的准备时刻。"
        },
        {
          fr: "À vingt heures, nous nous asseyons tous autour de la grande table en bois. Mon grand-père raconte des histoires amusantes de sa jeunesse, et nous rions tous beaucoup. Nous mangeons lentement pour profiter de chaque saveur. Ma mère est une excellente cuisinière et tout le monde la félicite pour le repas. Nous buvons de l'eau minérale et un peu de jus de pomme. L'ambiance est très chaleureuse et remplie d'amour. J'aime ces soirées où nous partageons nos expériences de la journée.",
          zh: "八点钟，我们都围坐在大的木制餐桌旁。我的祖父讲述了他年轻时有趣的故事，我们都开怀大笑。我们慢慢地吃，以享受每一种味道。我妈妈是一位出色的厨师，大家都称称赞她做的这顿饭。我们喝矿泉水和一点苹果汁。气氛非常温馨，充满了爱。我喜欢这些分享当天经历的夜晚。"
        },
        {
          fr: "Après le plat principal, nous dégustons la salade de fruits préparée par mes frères. Elle est très rafraîchissante et sucrée. Ensuite, mon père apporte un plateau de fromages variés avec du pain frais. C'est une tradition française importante de manger du fromage à la fin du repas. Nous discutons de nos projets pour le week-end prochain. Mon frère veut aller au cinéma et ma mère préfère faire une promenade en forêt. Nous écoutons les avis de chacun avec respect et attention.",
          zh: "主菜之后，我们品尝了兄弟们准备的水果沙拉。它非常清爽且香甜。随后，我父亲端来一盘各式各样的奶酪和新鲜的面包。在饭后吃奶酪是一项重要的法国传统。我们讨论下周末的计划。我哥哥想去电影院，我妈妈更喜欢在森林里散步。我们带着尊重和关注倾听每个人的意见。"
        },
        {
          fr: "Enfin, la soirée se termine et nous aidons tous à débarrasser la table et à faire la vaisselle. C'est un travail d'équipe rapide et efficace. Je me sens très heureux et reconnaissant d'avoir une famille si unie. Avant de dormir, nous nous embrassons et nous nous disons bonne nuit. Ces moments simples sont les plus précieux dans la vie quotidienne. Je m'endors with le sourire, en pensant déjà à notre prochain rassemblement familial.",
          zh: "最后，夜晚结束了，我们都帮忙收拾桌子和洗碗。这是一个快速且高效的团队合作。我感到非常幸福，也很感激有一个如此团结的家庭。睡觉前，我们互相拥抱并道晚安。这些简单的时刻是日常生活中最珍贵的。我带着微笑入睡，已经在想着我们的下一次家庭聚会了。"
        }
      ],
      keywords: [
        { word: "dîner", ipa: "/di.ne/", zh: "晚餐" },
        { word: "famille", ipa: "/fa.mij/", zh: "家庭" },
        { word: "poulet", ipa: "/pu.lɛ/", zh: "鸡肉" },
        { word: "dessert", ipa: "/de.sɛʁ/", zh: "甜点" },
        { word: "tradition", ipa: "/tʁa.di.sjɔ̃/", zh: "传统" },
        { word: "vaisselle", ipa: "/vɛ.sɛl/", zh: "餐具/洗碗" }
      ]
    }
  ],
  A2: [
    {
      id: 'a2-1',
      level: 'A2',
      title: { fr: "La Gastronomie Française", zh: "法国美食" },
      paragraphs: [
        {
          fr: "La France est mondialement célèbre pour sa gastronomie riche et variée. Chaque region possède ses propres spécialités culinaires uniques. En Bretagne, on déguste les fameuses crêpes et galettes avec du cidre local. C'est une tradition très ancienne qui attire de nombreux touristes chaque année. Les ingrédients sont simples : de la farine, des œufs, du lait et beaucoup de beurre salé. Les Bretons sont très fiers de leur patrimoine culinaire et partagent volontiers leurs secrets avec les visiteurs curieux.",
          zh: "法国以其丰富多样的美食享誉世界。每个地区都有自己独特的烹饪特色。在布列塔尼，人们品尝著名的克雷普饼（甜）和格莱特饼（咸）并搭配当地的苹果酒。这是一项吸引了每年许多游客的古老传统。食材很简单：面粉、鸡蛋、牛奶和大量的咸黄油。布列塔尼人对他们的烹饪遗产感到非常自豪，并乐于与好奇的游客分享他们的秘密。"
        },
        {
          fr: "Dans le Sud de la France, la cuisine est influencée par le soleil et la mer Méditerranée. On utilise beaucoup d'huile d'olive, d'ail frais et d'herbes de Provence parfumées. La bouillabaisse est le plat emblématique de la ville de Marseille. C'est une soupe de poissons délicieuse servie avec de la rouille. Les marchés du Sud sont remplis de légumes colorés comme les tomates, les poivrons rouges et les aubergines. C'est une cuisine très saine qui reflète parfaitement la joie de vivre des habitants.",
          zh: "在法国南部，烹饪受到阳光和地中海的影响。人们使用大量的橄榄油、新鲜大蒜和芳香的普罗旺斯香草。马赛鱼汤是马赛市的标志性菜肴。这是一种美味的鱼汤，搭配辣味蛋黄酱（rouille）食用。南部的市场摆满了色彩鲜艳的蔬菜，如西红柿、红辣椒和茄子。这是一种非常健康的饮食，完美地反映了当地居民的生活乐趣。"
        },
        {
          fr: "En Alsace, à l'est du pays, la choucroute est le plat principal incontournable pour les grandes occasions. Elle est préparée avec du chou fermenté et différentes sortes de charcuterie locale. Les vins blancs d'Alsace sont également réputés pour leur finesse et leur arôme fruité. C'est une région où les traditions sont très fortes, surtout pendant la période magique de Noël with ses marchés. On y mange aussi le kouglof, une brioche en forme de couronne avec des raisins secs.",
          zh: "在国家东部的阿尔萨斯，酸菜腌肉（choucroute）是重大场合不可或缺的主菜。它由发酵的卷心菜 and 各种当地熟食制成。阿尔萨斯的白葡萄酒也因其精致和果香而闻名。这是一个传统氛围浓厚的地区，尤其是在拥有特色市场的神奇圣诞期间。人们在那儿也吃库格洛夫（kouglof），一种带有葡萄干的皇冠形状的布里欧修面包。"
        },
        {
          fr: "Enfin, à Lyon, la capitale mondiale de la gastronomie, on trouve les fameux 'bouchons' lyonnais. Ce sont des restaurants typiques qui servent des spécialités généreuses comme la quenelle ou la tarte à la praline rose. La cuisine lyonnaise est conviviale et chaleureuse. Il est important de réserver une table car ces endroits sont très populaires. Découvrir la France à travers ses plats est un voyage extraordinaire pour les papilles. Chaque repas est une véritable célébration de l'art de vivre français.",
          zh: "最后，在世界美食之都里昂，可以找到著名的里昂‘bouchons’餐馆。这些特色餐厅供应丰盛的特色菜，如鱼丸（quenelle）或粉红坚果糖挞。里昂菜肴充满社交乐趣且温馨。预订位子很重要，因为这些地方非常受欢迎。通过菜肴发现法国是一场非凡的味蕾之旅。每一餐都是对法式生活艺术的真正庆祝。"
        }
      ],
      keywords: [
        { word: "gastronomie", ipa: "/ɡas.tʁɔ.nɔ.mi/", zh: "美食学/烹饪法" },
        { word: "spécialité", ipa: "/spe.sja.li.te/", zh: "特色菜/专业" },
        { word: "ingrédient", ipa: "/ɛ̃.ɡʁe.djɑ̃/", zh: "食材/配料" },
        { word: "patrimoine", ipa: "/pa.tʁi.mwan/", zh: "遗产" },
        { word: "conviviale", ipa: "/kɔ̃.vi.vjal/", zh: "欢乐的/社交的" },
        { word: "papilles", ipa: "/pa.pij/", zh: "味蕾" }
      ]
    },
    {
      id: 'a2-2',
      level: 'A2',
      title: { fr: "Le Tour de France", zh: "环法自行车赛" },
      paragraphs: [
        {
          fr: "Le Tour de France est la compétition cycliste la plus célèbre et la plus difficile au monde entier. Créée en 1903 par Henri Desgrange, cette course par étapes dure trois semaines chaque été pendant le mois de juillet. Elle traverse les plus beaux paysages de France, des plaines verdoyantes aux sommets escarpés des Alpes et des Pyrénées. Pour les Français, c'est bien plus qu'une simple épreuve sportive, c'est un événement national qui rassemble les gens.",
          zh: "环法自行车赛是世界上最著名也是最困难的自行车比赛。该项赛事由亨利·德格朗于1903年创立，每年夏季的七月期间持续三周。它横跨法国最美丽的风景，从郁郁葱葱的平原到阿尔卑斯山和比利牛斯山脉陡峭的山峰。对于法国人来说，这不仅仅是一项体育竞技，更是一个让人们团结在一起的国家盛事。"
        },
        {
          fr: "Les coureurs doivent faire preuve d'une endurance exceptionnelle pour terminer la course. Chaque jour, ils parcourent environ cent soixante kilomètres sous le soleil ou la pluie. Il y a différentes catégories de maillots pour récompenser les meilleurs. Le plus prestigieux est le 'maillot jaune', porté par le leader du classement général. On trouve aussi le maillot vert pour le meilleur sprinteur et le maillot à pois rouges pour le meilleur grimpeur en montagne.",
          zh: "车手们必须表现出非凡的耐力才能完成比赛。每天，他们在阳光或雨水中骑行约160公里。有不同种类的领骑衫来奖励表现最好的人。最负盛名的是由总成绩领先者穿戴的‘黄衫’。还有代表最佳冲刺手的绿衫和代表最佳爬坡手的红白斑点衫。"
        },
        {
          fr: "L'ambiance autour du Tour est incroyablement festive. Avant le passage des cyclistes, la célèbre 'caravane publicitaire' distribue des milliers de petits cadeaux et de gadgets aux spectateurs enthousiastes. C'est un moment de grande joie pour les enfants et les parents. Les gens préparent souvent des pique-niques géants et passent la journée entière au bord de la route à attendre leurs héros. On décore les routes with des drapeaux et on écrit des messages d'encouragement.",
          zh: "环法赛周围的气氛非常热烈。在车手们经过之前，著名的‘宣传车队’会向热情的观众分发数以千计的小礼物和小玩意。对于孩子和父母来说，这是一个非常快乐的时刻。人们经常准备大型野餐，整天待在路边等待他们的英雄。人们用旗帜装饰道路，并写下鼓励的信息。"
        },
        {
          fr: "La dernière étape se termine traditionnellement sur l'avenue prestigieuse des Champs-Élysées à Paris. C'est un moment très émouvant où le vainqueur célèbre son triomphe final with son équipe. Monter sur le podium est le rêve de tout cycliste professionnel. Le Tour de France reste un symbole fort de persévérance, de courage et de dépassement de soi. Chaque année, une nouvelle page de l'histoire du sport s'écrit sur les routes de France, captivant des millions de spectateurs.",
          zh: "最后一个赛段传统上结束在巴黎著名的香榭丽舍大街。这是一个非常感人的时刻，获胜者与他的团队一起庆祝最终的胜利。登上领奖台是每一位职业自行车手的梦想。环法自行车赛仍然是毅力、勇气和超越自我的有力象征。每年，体育史上的新篇章都在法国的道路上书写，吸引着数百万观众。"
        }
      ],
      keywords: [
        { word: "compétition", ipa: "/kɔ̃.pe.ti.sjɔ̃/", zh: "竞赛/比赛" },
        { word: "étapes", ipa: "/e.tap/", zh: "阶段/赛段" },
        { word: "maillot", ipa: "/ma.jo/", zh: "运动衫/领骑衫" },
        { word: "endurance", ipa: "/ɑ̃.dy.ʁɑ̃s/", zh: "耐力" },
        { word: "triomphe", ipa: "/tʁi.ɔ̃f/", zh: "凯旋/胜利" },
        { word: "persévérance", ipa: "/pɛʁ.se.ve.ʁɑ̃s/", zh: "毅力" }
      ]
    },
    {
      id: 'a2-3',
      level: 'A2',
      title: { fr: "Le Cinéma Français : Une Histoire d'Amour", zh: "法国电影：一段爱之往事" },
      paragraphs: [
        {
          fr: "Le cinéma français occupe une place privilégiée dans le cœur des cinéphiles du monde entier. Depuis l'invention du cinématographe par les frères Lumière en 1895, la France a toujours été à la pointe de l'innovation cinématographique. Les premiers films étaient des scènes simples de la vie quotidienne, mais ils ont immédiatement captivé le public. Aujourd'hui, le cinéma français est reconnu pour sa diversité, son style artistique unique et sa capacité à raconter des histoires humaines profondes avec une grande sensibilité.",
          zh: "法国电影在世界各地的影迷心中占有特殊地位。自从1895年卢米埃尔兄弟发明电影机以来，法国始终处于电影创新的前沿。最早的电影是日常生活的简单场景，但它们立即吸引了观众。如今，法国电影以其多样性、独特的艺术风格以及用敏锐触角讲述深刻人文故事的能力而闻名于世。"
        },
        {
          fr: "Chaque année, le Festival de Cannes est l'un des événements les plus prestigieux de l'industrie cinématographique mondiale. Situé sur la Côte d'Azur, ce festival attire des réalisateurs, des acteurs et des journalistes de tous les pays. Gagner la 'Palme d'Or' est la récompense ultime pour un film d'auteur. Pendant deux semaines en mai, la ville de Cannes devient la capitale mondiale du cinéma. C'est l'occasion de découvrir de nouveaux talents et de célébrer le talent des grands maîtres confirmés sous les projecteurs.",
          zh: "每年，戛纳电影节都是全球电影界最负盛名的盛事之一。该电影节位于蔚蓝海岸，吸引了来自各国的导演、演员和记者。赢得“金棕榈奖”是作者电影的终极奖项。在五月的两周时间里，戛纳市成为了世界电影之都。这是发现新秀、并在聚光灯下庆祝成名大师才华的时机。"
        },
        {
          fr: "Les Français aiment passionnément aller au cinéma. Il existe de nombreuses salles indépendantes et des grands complexes modernes dans toutes les villes. Le cinéma est considéré en France comme le 'septième art'. Le gouvernement soutient activement la production nationale pour préserver cette richesse culturelle face à la concurrence internationale. De nombreux films français rencontrent également un grand succès à l'étranger, exportant ainsi la langue française et l'élégance de la culture de l'Hexagone à travers les écrans mondiaux.",
          zh: "法国人酷爱去电影院。在所有城市中，既有许多独立放映厅，也有大型现代影城。在法国，电影被视为“第七艺术”。政府积极支持国内制作，以在国际竞争面前保护这一文化财富。许多法国电影在海外也取得了巨大成功，从而通过全球银幕输出了法语和法兰西文化的优雅。"
        },
        {
          fr: "En conclusion, le cinéma français est un miroir de la société et un vecteur important d'émotions partagées. Que ce soit à travers les comédies légères, les drames intenses ou les films d'animation innovants, il continue de surprendre et d'émerveiller. Regarder des films français est aussi une excellente façon pour les étudiants d'améliorer leur compréhension de la langue et de découvrir les nuances de la vie en France. C'est une porte ouverte sur un univers créatif sans fin et une source d'inspiration constante.",
          zh: "总之，法国电影是社会的镜子，也是共享情感的重要载体。无论是通过轻喜剧、深刻的剧情片还是创新的动画电影，它都不断带给人惊喜和赞叹。对于学生来说，观看法国电影也是提高语言理解能力、发现法国生活细节的极佳方式。它是通往无尽创意世界的大门，也是不断的灵感源泉。"
        }
      ],
      keywords: [
        { word: "cinéma", ipa: "/si.ne.ma/", zh: "电影" },
        { word: "réalisation", ipa: "/ʁe.a.li.za.sjɔ̃/", zh: "导演/制作" },
        { word: "prestigieux", ipa: "/pʁɛs.ti.ʒjø/", zh: "享有盛誉的" },
        { word: "récompense", ipa: "/kɔ.kɔ̃.pɑ̃s/", zh: "奖励/报酬" },
        { word: "culturel", ipa: "/kyl.ty.ʁɛl/", zh: "文化的" },
        { word: "émotion", ipa: "/e.mɔ.sjɔ̃/", zh: "情感" }
      ]
    }
  ],
  B1: [
    {
      id: 'b1-1',
      level: 'B1',
      title: { fr: "L'art de vivre à la française : plus qu'une simple tradition", zh: "法兰西生活艺术：不止于传统" },
      paragraphs: [
        {
          fr: "Le fameux « art de vivre » français est souvent associé aux terrasses de café, au vin et à la gastronomie. Mais pour moi, qui vis en France depuis cinq ans, c'est avant tout une philosophie du temps et de la priorisation.",
          zh: "著名的“法兰西生活艺术”常常与咖啡馆露台、葡萄酒和美食联系在一起。但对我这个已在法国生活了五年的人来说，它首先是一种时间哲学和优先排序。"
        },
        {
          fr: "Le premier principe, et le plus frappant, est l'importance du repas. Ici, déjeuner n'est pas une simple pause pour avaler un sandwich devant son ordinateur. C'est un moment sacré de coupure, souvent partagé with des collègues ou des amis. On prend le temps de discuter, de rire, de profiter de l'instant présent. Cette coupure permet de revenir au travail l'après-midi plus détendu et concentré.",
          zh: "第一个原则，也是最引人注目的，是用餐的重要性。在这里，午餐不是坐在电脑前匆忙吞下一个三明治的简单休息。它是一个神圣的间歇时刻，通常与同事或朋友共享。人们花时间交谈、欢笑、享受当下。这种间歇让人在下午能更放松、更专注地回到工作中。"
        },
        {
          fr: "Ensuite, il y a le respect des frontières entre vie professionnelle et vie privée. Il est rare de recevoir des emails professionnels tard le soir ou le week-end. Les Français savent mettre des limites, ce qui est essentiel pour éviter le burn-out. Après 19 heures, le temps est généralement réservé à la famille, aux amis ou aux loisirs.",
          zh: "其次，是对工作与私人生活之间界限的尊重。在深夜或周末收到工作邮件的情况很罕见。法国人懂得设定界限，这对于避免职业倦怠至关重要。晚上7点之后，时间通常留给家庭、朋友或休闲活动。"
        },
        {
          fr: "Cependant, cet art de vivre nécessite un certain équilibre. Parfois, cette insistance sur les pauses peut donner l'impression d'un manque de productivité pour ceux qui viennent de cultures plus pressées. Mais en réalité, il s'agit d'une productivité différente, fondée sur la qualité plutôt que sur la quantité d'heures passées au bureau.",
          zh: "然而，这种生活艺术需要一定的平衡。有时，这种对休息的坚持可能会给来自节奏更快文化背景的人留下效率低下的印象。但实际上，这是一种不同的效率，建立在工作质量而非耗费在办公室的小时数之上。"
        },
        {
          fr: "Je pense que nous devrions tous tirer des leçons de cette approche. Il est essentiel de se rappeler que nous ne sommes pas des machines et que notre bien-être mental influence directement notre travail. Pour ma part, j'ai appris à mieux organiser mon temps et à accorder plus d'importance aux moments simples. Après tout, la vie ne se mesure pas uniquement à nos réussites professionnelles, mais aussi à la quality de nos journées.",
          zh: "我认为我们都应该从这种态度中汲取经验。必须牢记，我们不是机器，我们的心理健康直接影响我们的工作。就我个人而言，我学会了更好地安排时间，并更重视简单的时刻。毕竟，生活的衡量标准不仅在于我们的职业成就，也在于我们每一天的生活质量。"
        }
      ],
      keywords: [
        { word: "art de vivre", ipa: "/aʁ də vivʁ/", zh: "生活艺术" },
        { word: "priorisation", ipa: "/pʁi.jɔ.ʁi.za.sjɔ̃/", zh: "优先排序" },
        { word: "frontière", ipa: "/fʁɔ̃.tjɛʁ/", zh: "界限，边界" },
        { word: "burn-out", ipa: "/bœʁ.naut/", zh: "职业倦怠，过劳" },
        { word: "équilibre", ipa: "/e.ki.libʁ/", zh: "平衡" },
        { word: "profiter de", ipa: "/pʁɔ.fi.te də/", zh: "享受，利用" },
        { word: "tirer des leçons", ipa: "/ti.ʁe de lə.sɔ̃/", zh: "吸取教训" },
        { word: "Il est essentiel de", ipa: "/il ɛ tɛ.sɑ̃.sjɛl də/", zh: "...是至关重要的" }
      ]
    },
    {
      id: 'b1-2',
      level: 'B1',
      title: { fr: "L'importance de la protection de l'environnement", zh: "环境保护的重要性" },
      paragraphs: [
        {
          fr: "De nos jours, la protection de l'environnement est devenue une priorité mondiale indiscutable. Les changements climatiques, la pollution des océans et la disparition de nombreuses espèces animales nous obligent à repenser notre mode de vie de manière urgente. En France, de nombreuses initiatives voient le jour pour encourager les citoyens à adopter des comportements plus responsables au quotidien. Le tri sélectif des déchets, la réduction de la consommation de plastique et le développement des énergies renouvelables sont des étapes cruciales.",
          zh: "如今，环境保护已成为无可争议的全球优先事项。气候变化、海洋污染和许多动物物种的消失迫使我们迫切重新思考我们的生活方式。在法国，许多举措应运而生，鼓励公民在日常生活中采取更负责任的行为。垃圾分类、减少塑料消耗和发展可再生能源是关键步骤。"
        },
        {
          fr: "L'éducation joue un rôle fondamental dans cette transition écologique nécessaire. Dès le plus jeune âge, les enfants apprennent à l'école l'importance de respecter la nature et d'économiser les ressources naturelles comme l'eau et l'énergie. Des jardins pédagogiques sont installés dans les cours d'école pour sensibiliser les élèves à la biodiversité locale. Cette prise de conscience collective est essentielle car chaque petit geste compte pour l'avenir de la planète et des prochaines générations.",
          zh: "教育在这一必要的生态转型中起着基础性作用。从很小的时候起，孩子们就在学校学习尊重自然和节约水、能源等自然资源的重要性。学校操场上安装了教学花园，以使学生意识到当地生物多样性的重要性。这种集体意识的觉醒至关重要，因为每一个小动作都关乎地球的未来和下一代。"
        },
        {
          fr: "Le gouvernement français a également mis en place des lois strictes pour limiter les émissions de gaz à effet de serre. Par exemple, l'interdiction progressive des voitures thermiques au profit des véhicules électriques est un changement majeur pour l'industrie automobile. De plus, les entreprises sont désormais encouragées à réduire leur empreinte carbone par des incitations fiscales attractives. Ces mesures politiques visent à transformer en profondeur la structure de notre économie actuelle pour la rendre plus durable.",
          zh: "法国政府还制定了严格的法律来限制温室气体排放。例如，逐步禁止燃油车并改用电动汽车是汽车行业的一项重大变革。此外，现在还通过有吸引力的税收激励措施鼓励企业减少碳足迹。这些政策措施旨在深度改变我们当前的经济结构，使其更具可持续性。"
        },
        {
          fr: "Finalement, protéger l'environnement est un défi technique mais aussi philosophique. Il s'agit de redéfinir notre rapport à la consommation et au progrès technologique. Nous devons apprendre à vivre mieux avec moins, en privilégiant la qualité sur la quantité. L'innovation technologique offre des solutions prometteuses, comme le captage du carbone, mais elles ne suffiront pas sans un changement profond de nos mentalités. Ensemble, en étant conscients, nous pouvons inverser la tendance et offrir un futur radieux.",
          zh: "最后，保护环境不仅是一项技术挑战，也是一项哲学挑战。这是要重新定义我们与消费和技术进步的关系。我们必须学会用更少的资源过上更好的生活，优先考虑质量而非数量。技术创新提供了很有前景的解决方案，如碳捕集，但如果不从根本上改变我们的心态，这些是不够的。只要我们齐心协力，保持自觉，我们就能扭转局面，开创美好的未来。"
        }
      ],
      keywords: [
        { word: "priorité", ipa: "/pʁi.jɔ.ʁi.te/", zh: "优先事项" },
        { word: "initiative", ipa: "/i.ni.sja.tiv/", zh: "倡议/行动" },
        { word: "sensibiliser", ipa: "/sɑ̃.si.bi.li.ze/", zh: "使意识到/科普" },
        { word: "incitation", ipa: "/ɛ̃.si.ta.sjɔ̃/", zh: "诱因/奖励" },
        { word: "durable", ipa: "/dy.ʁabl/", zh: "可持续的" },
        { word: "biodégradable", ipa: "/bjo.de.ɡʁa.dabl/", zh: "可生物降解的" }
      ]
    },
    {
      id: 'b1-3',
      level: 'B1',
      title: { fr: "Le Télétravail : Une Révolution Professionnelle", zh: "远程办公：一场职业革命" },
      paragraphs: [
        {
          fr: "Depuis quelques années, le télétravail est devenu une pratique courante pour des millions de salariés à travers le monde. Cette nouvelle organisation du travail permet d'exercer ses fonctions professionnelles depuis son domicile ou un espace de coworking. Les avantages sont nombreux, notamment la réduction du temps passé dans les transports et une plus grande flexibilité horaire. Cependant, cette transition exige une discipline personnelle rigoureuse et une bonne maîtrise des outils numériques de communication pour rester efficace et connecté avec son équipe.",
          zh: "几年来，远程办公已成为全球数百万员工的常规做法。这种新的工作组织形式允许人们在家里或联合办公空间履行其职业职责。其优点有很多，特别是减少了在路上的时间以及更大的时间灵活性。然而，这种转变需要严格的个人自律和对数字通信工具的良好掌握，以便与团队保持高效连接。"
        },
        {
          fr: "Pour les entreprises, le télétravail représente un défi managérial majeur. Il faut apprendre à faire confiance aux employés sans avoir un contrôle physique direct sur leurs activités quotidiennes. La communication devient alors le pilier central de la collaboration. Les réunions en visioconférence et les plateformes de gestion de projets sont essentielles pour coordonner les tâches. Une entreprise qui adopte le télétravail peut également réduire ses coûts fixes liés aux bureaux physiques tout en améliorant le bien-être de ses collaborateurs engagés.",
          zh: "对于企业而言，远程办公代表了一项重大的管理挑战。必须学会信任员工，而无需对他们的日常活动进行直接的人身控制。沟通于是成为协作的核心支柱。视频会议和项目管理平台对于协调任务至关重要。采用远程办公的企业还可以减少与实体办公室相关的固定成本，同时提高其敬业员工的幸福感。"
        },
        {
          fr: "D'un point de vue social, le télétravail peut parfois engendrer un sentiment d'isolement. L'absence de contacts informels à la machine à café ou pendant le déjeuner peut peser sur le moral de certains travailleurs. Il est donc crucial de maintenir des moments de rencontre en présentiel pour renforcer la cohésion de l'équipe et la culture d'entreprise. Trouver le bon équilibre entre travail à distance et travail au bureau est la clé d'un modèle hybride réussi qui satisfait à la fois les besoins de l'individu et de l'organisation.",
          zh: "从社会角度来看，远程办公有时会导致孤独感。在咖啡机旁或午餐期间缺乏非正式接触可能会影响某些员工的士气。因此，保持面对面的会面时刻对于加强团队凝聚力和企业文化至关重要。在远程工作和办公室工作之间找到适当的平衡点是成功的混合模式的关键，既能满足个人需求，也能满足组织需求。"
        },
        {
          fr: "En conclusion, le télétravail transforme durablement notre vision de la carrière professionnelle. Il offre des opportunités d'autonomie inédites et favorise un meilleur équilibre entre vie privée et vie professionnelle. Toutefois, pour que cette expérience soit bénéfique, il est nécessaire de fixer des limites claires pour éviter le surmenage. Le droit à la déconnexion est devenu un enjeu juridique important dans nos sociétés hyperconnectées. L'avenir du travail sera sans doute flexible, numérique et centré sur la confiance mutuelle.",
          zh: "总之，远程办公持久地改变了我们对职业生涯的看法。它提供了前所未有的自主机会，并有利于更好地平衡私人生活和职业生活。然而，为了使这种体验有益，有必要设定明确的界限以避免过度劳累。在我们的高度互联社会中，‘断开连接权’已成为一个重要的法律议题。工作的未来无疑将是灵活的、数字化的，并以互信为中心。"
        }
      ],
      keywords: [
        { word: "télétravail", ipa: "/te.le.tʁa.vaj/", zh: "远程办公" },
        { word: "domicile", ipa: "/dɔ.mi.sil/", zh: "住所" },
        { word: "flexibilité", ipa: "/flɛk.si.bi.li.te/", zh: "灵活性" },
        { word: "management", ipa: "/ma.naʒ.mɑ̃/", zh: "管理" },
        { word: "hybride", ipa: "/i.bʁid/", zh: "混合的" },
        { word: "déconnexion", ipa: "/de.kɔ.nɛk.sjɔ̃/", zh: "断开连接" }
      ]
    }
  ],
  B2: [
    {
      id: 'b2-1',
      level: 'B2',
      title: { fr: "L'intelligence artificielle : enjeux et perspectives", zh: "人工智能：挑战与前景" },
      paragraphs: [
        {
          fr: "L'essor fulgurant de l'intelligence artificielle suscite aujourd'hui un mélange d'admiration et d'inquiétude au sein de la société. Cette technologie révolutionnaire transforme radicalement de nombreux secteurs d'activité, de la médecine à la finance, en passant par l'industrie manufacturière. Si l'IA permet d'automatiser des tâches répétitives et d'analyser des masses de données avec une précision inégalée, elle menace également de rendre obsolètes certains emplois traditionnels. Les experts s'accordent à dire que nous assistons à une mutation profonde du marché du travail.",
          zh: "人工智能的飞速崛起如今在社会中引发了钦佩与担忧并存的情绪。这项革命性的技术正在彻底改变许多活动领域，从医学到金融，再到制造业。如果说人工智能可以实现重复性任务的自动化，并以无与伦比的精度分析海量数据，它同时也威胁到某些传统职位的淘汰。专家们一致认为，我们正目睹着劳动力市场的深刻变革。"
        },
        {
          fr: "D'un point de vue éthique, le développement de l'intelligence artificielle soulève des questions complexes sur la responsabilité et la transparence. Qui est responsable lorsqu'un algorithme prend une décision erronée ou discriminatoire ? La protection de la vie privée est également un enjeu majeur, car les systèmes d'IA dépendent souvent d'une collecte massive d'informations personnelles. Il est donc impératif de mettre en place des cadres réglementaires stricts pour garantir que ces technologies soient utilisées au service de l'humanité et non à son détriment.",
          zh: "从伦理角度看，人工智能的发展引发了关于责任和透明度的复杂问题。当算法做出错误或歧视性的决定时，谁该负责？隐私保护也是一个重大挑战，因为人工智能系统往往依赖于海量的个人信息采集。因此，必须建立严格的监管框架，以确保这些技术为人类服务，而不是损害人类利益。"
        },
        {
          fr: "Pourtant, les bénéfices potentiels de l'IA sont immenses pour résoudre les défis mondiaux. Dans le domaine de la santé, elle aide les médecins à diagnostiquer des maladies avec une rapidité incroyable. En matière d'environnement, elle permet d'optimiser la gestion des ressources énergétiques et de modéliser avec précision l'évolution du climat. L'IA peut donc être un allié puissant pour construire un avenir plus durable et efficace. L'éducation devra aussi évoluer pour former les futurs citoyens à collaborer intelligemment avec ces nouveaux outils.",
          zh: "然而，人工智能在解决全球性挑战方面的潜在益处是巨大的。在医疗领域，它帮助医生以惊人的速度诊断疾病。在环境方面，它可以优化能源管理，并精确模拟气候演变。因此，人工智能可以成为建设更加可持续和高效未来的强大盟友。教育也必须不断演进，以培养未来的公民能够与这些新工具进行智能协作。"
        },
        {
          fr: "En conclusion, l'intelligence artificielle n'est ni une panacée ni une malédiction, mais un puissant instrument dont nous devons maîtriser l'usage. La clé réside dans une approche équilibrée qui favorise l'innovation tout en protégeant les droits fondamentaux des individus. Le dialogue entre les scientifiques, les politiques et la société civile est essentiel pour définir les limites de ce qui est acceptable. L'avenir de l'intelligence artificielle dépendra de notre capacité collective à orienter son évolution vers le bien commun.",
          zh: "总之，人工智能既不是万灵药，也不是诅咒，而是我们必须掌握其用途的强大工具。关键在于采取一种平衡的方法，在保护个人基本权利的同时鼓励创新。科学家、决策者与民间社会之间的对话对于界定可接受的界限至关重要。人工智能的未来将取决于我们将其演进引向公共利益的集体能力。"
        }
      ],
      keywords: [
        { word: "fulgurant", ipa: "/fyl.ɡy.ʁɑ̃/", zh: "飞速的/惊人的" },
        { word: "obsolète", ipa: "/ɔb.sɔ.lɛt/", zh: "陈旧的/过时的" },
        { word: "algorithme", ipa: "/al.ɡɔ.ʁit m(ə)/", zh: "算法" },
        { word: "transparence", ipa: "/tʁɑ̃s.pa.ʁɑ̃s/", zh: "透明度" },
        { word: "panacée", ipa: "/pa.na.se/", zh: "万灵药" },
        { word: "réglementaire", ipa: "/ʁe.ɡlə.mɑ̃.tɛʁ/", zh: "监管的" }
      ]
    }
  ],
  C1: [
    {
      id: 'c1-1',
      level: 'C1',
      title: { fr: "L'Existentialisme : Liberté et Responsabilité", zh: "存在主义：自由与责任" },
      paragraphs: [
        {
          fr: "L'existentialisme, courant philosophique prédominant du XXe siècle, repose sur le postulat fondamental que « l'existence précède l'essence ». Cette affirmation radicale, popularisée par Jean-Paul Sartre, signifie que l'être humain n'est pas défini par une nature prédéterminée, mais qu'il surgit dans le monde sans raison d'être initiale. L'homme est ainsi jeté dans une liberté absolue, ce qui, loin d'être un simple privilège, constitue une responsabilité écrasante. Selon Sartre, l'individu est le seul créateur de ses valeurs et de son destin propre.",
          zh: "存在主义是20世纪盛行的哲学流派，其核心前提是“存在先于本质”。这一激进的主张由让-保罗·萨特推广，意味着人类并非由预定的天性所定义，而是无缘无故地出现在这个世界上。因此，人被抛入了一种绝对的自由之中，这远非一种简单的特权，而是一种沉重的责任。在萨特看来，个人是其自身价值和命运的唯一创造者。"
        },
        {
          fr: "Cette liberté inaliénable engendre inévitablement un sentiment d'angoisse face au vide de l'existence et à l'absurdité du monde. Pour l'existentialiste, ne pas choisir est encore un choix, et chacun est responsable de l'image de l'homme qu'il projette à travers ses actes. Cette philosophie refuse tout déterminisme, qu'il soit biologique, social ou théologique. Elle invite l'individu à l'authenticité, c'est-à-dire à assumer pleinement ses choix sans se réfugier derrière des excuses ou des conventions morales préétablies par la société.",
          zh: "这种不可剥夺的自由不可避免地导致了面对生命虚无和世界荒谬时的焦虑感。对于存在主义者来说，不选择也是一种选择，每个人都要对自己通过行动塑造的人类形象负责。这种哲学拒绝一切决定论，无论是生物的、社会的还是神学的。它邀请个人走向“本真性”，即充分承担自己的选择，而不躲在借口或社会预设的道德规范后面。"
        },
        {
          fr: "Critiqué par certains pour son pessimisme apparent, l'existentialisme se veut pourtant une doctrine de l'action et de l'optimisme tragique. Si le monde n'a pas de sens intrinsèque, c'est à l'homme de lui en donner un par son engagement dans la cité. La solidarité humaine naît de cette condition commune : nous sommes tous « condamnés à être libres ». L'œuvre littéraire de Sartre, comme ses pièces de théâtre, illustre ces dilemmes moraux où les personnages doivent naviguer entre leur désir de liberté et les contraintes de la situation historique.",
          zh: "尽管有些人批评存在主义表现出的悲观主义，但它实际上是一种行动学说和悲剧性的乐观主义。如果世界没有内在意义，那么就需要人通过在社会中的契合（engagement）来赋予它意义。人类的团结源于这种共同的境遇：我们都“注定是自由的”。萨特的文学作品，如他的戏剧，展示了这些道德困境，角色必须在自由渴望与历史局限之间寻找平衡。"
        },
        {
          fr: "En conclusion, l'existentialisme demeure une pensée d'une actualité brûlante dans un monde en quête de repères. Il nous rappelle que notre essence n'est jamais figée et que nous avons le pouvoir permanent de nous réinventer. Face aux défis contemporains, cette philosophie nous exhorte à ne pas être de simples spectateurs de notre vie, mais à en devenir les acteurs conscients et engagés. La dignité humaine réside précisément dans cette capacité à dire « non » à la fatalité et à sculpter son propre chemin dans l'incertitude.",
          zh: "总之，在一个寻找坐标的世界里，存在主义仍然是一种极具现实意义的思想。它提醒我们，我们的本质绝非固定不变，我们拥有不断重塑自我的权力。面对当代的挑战，这一哲学敦促我们不要只做生活的旁观者，而要成为自觉且投入的主角。人类的尊严恰恰在于这种对命运说“不”的能力，以及在不确定性中开拓自己道路的能力。"
        }
      ],
      keywords: [
        { word: "essence", ipa: "/e.sɑ̃s/", zh: "本质" },
        { word: "prédéterminé", ipa: "/pʁe.de.tɛʁ.mi.ne/", zh: "预定的" },
        { word: "écrasant", ipa: "/e.kʁa.zɑ̃t/", zh: "压倒性的/沉重的" },
        { word: "angoisse", ipa: "/ɑ̃.ɡwas/", zh: "焦虑/痛苦" },
        { word: "authenticité", ipa: "/o.tɑ̃.ti.si.te/", zh: "真实性" },
        { word: "déterminisme", ipa: "/de.tɛʁ.mi.nism/", zh: "决定论" }
      ]
    }
  ]
};