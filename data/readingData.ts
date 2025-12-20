import { ReadingArticle, ProficiencyLevel } from '../types';

export const STATIC_READING: Record<ProficiencyLevel, ReadingArticle[]> = {
  A1: [
    {
      id: 'a1-1',
      level: 'A1',
      title: { fr: "Ma routine quotidienne", zh: "我的日常生活" },
      paragraphs: [
        {
          fr: "Je m'appelle Lucas et j'habite dans un petit appartement à Lyon. Ma routine commence chaque matin à six heures et demie très précises. Le réveil sonne et je me lève tout de suite pour faire un peu de sport dans mon salon. Ensuite, je vais dans la cuisine pour préparer mon petit-déjeuner. Je bois un grand café au lait et je mange deux tartines avec du miel. J'adore regarder par la fenêtre parce que le soleil se lève doucement sur la ville.",
          ipa: "/ʒə ma.pɛl ly.ka e ʒa.bit dɑ̃z œ̃ pə.ti a.paʁ.tə.mɑ̃ a ljɔ̃. ma ʁu.tin kɔ.mɑ̃s ʃak ma.tɛ̃ a siz œʁ e də.mi tʁɛ pʁe.siz. lə ʁe.vɛj sɔn e ʒə mə lɛv tu dʁwa puʁ fɛʁ œ̃ pø də spɔʁ dɑ̃ mɔ̃ sa.lɔ̃. ɑ̃.sɥit, ʒə vɛ dɑ̃ la kɥi.zin puʁ pʁe.pa.ʁe mɔ̃ pə.ti de.ʒœ.ne. ʒə bwa œ̃ ɡʁɑ̃ ka.fe o lɛ e ʒə mɑ̃ʒ dø taʁ.tin a.vɛk dy mjɛl. ʒa.dɔʁ ʁə.ɡaʁ.de paʁ la fə.nɛtʁ paʁs.kə lə sɔ.lɛj sə lɛv du.sə.mɑ̃ syʁ la vil/",
          zh: "我叫卢卡斯，住在里昂的一个小公寓里。我的日常生活每天早上准时六点半开始。闹钟一响，我立刻起床，在客厅做一会儿运动。然后，我去厨房准备早餐。我喝一大杯拿铁咖啡，吃两片涂有蜂蜜的面包。我喜欢望向窗外，因为太阳正在城市上空缓缓升起。"
        },
        {
          fr: "À huit heures, je quitte ma maison pour aller au bureau. Je prends le métro parce que c'est très rapide et pratique pour traverser le centre. Pendant le trajet, je lis souvent un livre ou j'écoute de la musique française sur mon téléphone. Mon travail est intéressant mais parfois un peu fatigant car j'ai beaucoup de réunions. Je travaille avec une équipe très sympathique. À midi, nous déjeunons ensemble dans un petit restaurant italien juste à côté du bureau.",
          ipa: "/a ɥit œʁ, ʒə kit ma mɛ.zɔ̃ puʁ a.le o by.ʁo. ʒə pʁɑ̃ lə me.tʁo paʁs.kə sɛ tʁɛ ʁa.pid e pʁa.tik puʁ tʁa.vɛʁ.se lə sɑ̃.tʁə. pɑ̃.dɑ̃ lə tʁa.ʒɛ, ʒə li su.vɑ̃ œ̃ livʁ u ʒe.kut də la my.zik fʁɑ̃.sɛz syʁ mɔ̃ te.le.fɔn. mɔ̃ tʁa.vaj ɛ ɛ̃.te.ʁɛ.sɑ̃ mɛ paʁ.fwa œ̃ pø fa.ti.ɡɑ̃ kaʁ ʒe bo.ku də ʁe.y.njɔ̃. ʒə tʁa.vaj a.vɛk yn e.kip tʁɛ sɛ̃.pa.tik. a mi.di, nu de.ʒœ.nɔ̃ ɑ̃.sɑ̃bl dɑ̃z œ̃ pə.ti ʁɛs.tɔ.ʁɑ̃ i.ta.ljɛ̃ ʒyst a ko.te dy by.ʁo/",
          zh: "八点钟，我离开家去办公室。我乘地铁，因为穿过市中心非常快速且方便。在途中，我经常看书或用手机听法语音乐。我的工作很有趣，但有时有点累，因为我有很多会议。我和一个非常友好的团队一起工作。中午，我们在办公室旁边的一家意大利小餐馆一起吃午饭。"
        },
        {
          fr: "L'après-midi, je retourne à mes dossiers importants. Je réponds aux courriels et je participe à quelques discussions techniques. Vers seize heures, je fais une petite pause pour boire un verre d'eau et manger une pomme. C'est le moment où je commence à être un peu fatigué, mais je reste concentré sur mes tâches jusqu'au bout. Je termine ma journée de travail à dix-huit heures précises. Je range soigneusement mon bureau et je dis au revoir à tous mes collègues.",
          ipa: "/la.pʁɛ mi.di, ʒə ʁə.tuʁn a me dɔ.sje ɛ̃.pɔʁ.tɑ̃. ʒə ʁe.pɔ̃ o ku.ʁjɛl e ʒə paʁ.ti.sip a kɛl.kə dis.ky.sjɔ̃ tɛk.nik. vɛʁ sɛz œʁ, ʒə fɛ yn pə.tit poz puʁ bwaʁ œ̃ vɛʁ do e mɑ̃.ʒe yn pɔm. sɛ lə mɔ.mɑ̃ u ʒə kɔ.mɑ̃s a ɛtʁ œ̃ pø fa.ti.ɡe, mɛ ʒə ʁɛst kɔ̃.sɑ̃.tʁe syʁ me taʃ ʒys.ko bu. ʒə tɛʁ.min ma ʒuʁ.ne də tʁa.vaj a di.zɥit œʁ pʁe.siz. ʒə ʁɑ̃ʒ swa.ɲøz.mɑ̃ mɔ̃ by.ʁo e ʒə di o ʁə.vwaʁ a tu me kɔ.lɛɡ/",
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
          fr: "Aujourd'hui, c'est un jour très spécial car je visite le musée du Louvre avec mes meilleurs amis. C'est le plus grand musée de Paris et il est absolument magnifique. Nous arrivons devant la grande pyramide de verre à dix heures du matin. Il y a déjà beaucoup de touristes du monde entier, mais l'organisation est excellente. Le ciel est bleu et le soleil brille sur les vieux murs du palais historique. Je suis très impressionné par l'architecture majestueuse.",
          ipa: "/o.ʒuʁ.dɥi, sɛ œ̃ ʒuʁ tʁɛ spe.sjal kaʁ ʒə vi.zit lə my.ze dy luvʁ a.vɛk me mɛ.jœʁ za.mi. sɛ lə ply ɡʁɑ̃ my.ze də pa.ʁi e il ɛ ab.sɔ.ly.mɑ̃ ma.ɲi.fik. nu za.ʁi.vɔ̃ də.vɑ̃ la ɡʁɑ̃d pi.ʁa.mid də vɛʁ a di zœʁ dy ma.tɛ̃. i l i a de.ʒa bo.ku də tu.ʁist dy mɔ̃d ɑ̃.tjɛ, mɛ lɔʁ.ɡa.ni.za.sjɔ̃ ɛ ɛk.sɛ.lɑ̃t. lə sjɛl ɛ blø e lə sɔ.lɛj bʁij syʁ le vjø myʁ dy pa.lɛ is.tɔ.ʁik. ʒə sɥi tʁɛ ɛ̃.pʁɛ.sjɔ.ne paʁ laʁ.ʃi.tɛk.tyʁ ma.ʒɛs.tɥøz/",
          zh: "今天是一个非常特别的日子，因为我要和我最好的朋友们一起参观卢浮宫。这是巴黎最大的博物馆，非常壮丽。我们在上午十点到达巨大的玻璃金字塔前。这里已经有许多来自世界各地的游客，但组织工作非常出色。天空湛蓝，阳光照耀在这座历史宫殿古老的墙壁上。宏伟的建筑让我印象深刻。"
        },
        {
          fr: "À l'intérieur, il y a des milliers d'œuvres d'art inestimables. Nous cherchons d'abord la célèbre Joconde de Léonard de Vinci dans la grande galerie. La peinture est un peu plus petite que je pensais, mais elle est vraiment fascinante à regarder. Ensuite, nous admirons les sculptures grecques comme la Vénus de Milo et les objets de l'Égypte ancienne. Les salles sont immenses et très richement décorées avec des plafonds peints. Je prends beaucoup de photos pour mes souvenirs.",
          ipa: "/a lɛ̃.te.ʁjœʁ, i l i a de mi.lje dœ.vʁə daʁ i.nɛs.ti.mabl. nu ʃɛʁ.ʃɔ̃ da.bɔʁ la se.lɛbʁ ʒɔ.kɔ̃d də le.o.naʁ də vɛ̃.si dɑ̃ la ɡʁɑ̃d ɡal.ʁi. la pɛ̃.tyʁ ɛ œ̃ pø ply pə.tit kə ʒə pɑ̃.sɛ, mɛ ɛl ɛ vʁɛ.mɑ̃ fa.si.nɑ̃t a ʁə.ɡaʁ.de. ɑ̃.sɥit, nu ad.mi.ʁɔ̃ le skyl.tyʁ ɡʁɛk kɔm la ve.nys də mi.lo e le zɔb.ʒɛ də le.ʒipt ɑ̃.sjɛn. le sal sɔ̃ i.mɑ̃s e tʁɛ ʁi.ʃə.mɑ̃ de.kɔ.ʁe a.vɛk de pla.fɔ̃ pɛ̃. ʒə pʁɑ̃ bo.ku də fɔ.to puʁ me suv.niʁ/",
          zh: "馆内有成千上万件无价的艺术品。我们首先在大画廊里寻找达芬奇著名的《蒙娜丽莎》。这幅画比我想象的要小一点，但看着真的很迷人。接着，我们欣赏了米洛的维纳斯等希腊雕塑和古埃及文物。展厅巨大，天花板上绘有精美的装饰。我拍了很多照片作为留念。"
        },
        {
          fr: "Nous découvrons ensuite les appartements de Napoléon III. C'est un décor très luxueux avec beaucoup d'or et de velours rouge partout. On peut imaginer la vie des rois et des reines dans ce palais historique il y a longtemps. Les lustres en cristal brillent intensément dans les grandes salles de réception. Je reste longtemps à regarder les détails des meubles anciens et des tapis précieux. C'est comme faire un véritable voyage dans le temps. Mes amis sont aussi fascinés que moi.",
          ipa: "/nu de.ku.vʁɔ̃ ɑ̃.sɥit le za.pa.ʁtə.mɑ̃ də na.pɔ.le.ɔ̃ tʁwa. sɛ œ̃ de.kɔʁ tʁɛ lyk.sɥø a.vɛk bo.ku dɔʁ e də və.luʁ ʁuʒ paʁ.tu. ɔ̃ pø i.ma.ʒi.ne la vi de ʁwa e de ʁɛn dɑ̃ sə pa.lɛ is.tɔ.ʁik i l i a lɔ̃.tɑ̃. le lystʁə ɑ̃ kʁis.tal bʁij ɛ̃.tɑ̃.se.mɑ̃ dɑ̃ le ɡʁɑ̃d sal də ʁe.sɛp.sjɔ̃. ʒə ʁɛst lɔ̃.tɑ̃ a ʁə.ɡaʁ.de le de.taj de mœbl ɑ̃.sjɛ̃ e de ta.pi pʁe.sjø. sɛ kɔm fɛʁ œ̃ ve.ʁi.ta.blə vwa.jaʒ dɑ̃ lə tɑ̃. me za.mi sɔ̃ o.si fa.si.ne kə mwa/",
          zh: "接着我们参观了拿破仑三世的套房。那里到处是金子和红丝绒，装饰极尽奢华。我们可以想象很久以前国王和王后在这座历史宫殿里的生活。大接待厅里的水晶吊灯闪闪发光。我久久地端详着古董家具和名贵地毯的细节。这就像是一场真正的时空旅行。我的朋友们也和我一样着迷。"
        },
        {
          fr: "Après trois heures de marche, nous avons un peu faim. Nous décidons d'aller au café du musée pour faire une petite pause. Je bois un thé chaud et je mange une délicieuse pâtisserie française. Nous discutons de nos œuvres préférées et nous nous reposons un peu avant de sortir. Le Louvre est vraiment un trésor pour l'humanité entière. Nous promettons de revenir bientôt pour explorer les autres sections. Je sors du musée très heureux et avec beaucoup de nouvelles connaissances.",
          ipa: "/a.pʁɛ tʁwa zœʁ də maʁʃ, nu za.vɔ̃ œ̃ pø fɛ̃. nu de.si.dɔ̃ da.le o ka.fe dy my.ze puʁ fɛʁ yn pə.tit poz. ʒə bwa œ̃ te ʃo e ʒə mɑ̃ʒ yn de.li.sjøz pa.tis.ʁi fʁɑ̃.sɛz. nu dis.ky.tɔ̃ de no zœ.vʁə pʁe.fe.ʁe e nu nu ʁə.pɔ.zɔ̃ œ̃ pø a.vɑ̃ də sɔʁ.tiʁ. lə luvʁ ɛ vʁɛ.mɑ̃ œ̃ tʁe.zɔʁ puʁ ly.ma.ni.te ɑ̃.tjɛʁ. nu pʁɔ.mɛ.tɔ̃ də ʁə.və.niʁ bjɛ̃.to puʁ ɛks.plɔ.ʁe le zotʁə sɛk.sjɔ̃. ʒə sɔʁ dy my.ze tʁɛ ø.ʁø e a.vɛk bo.ku də nu.vɛl kɔ.nɛ.sɑ̃s/",
          zh: "走了三个小时后，我们有点饿了。我们决定去博物馆咖啡馆休息一会儿。我喝了杯热茶，吃了一块美味的法式点心。在离开之前，我们讨论了最喜欢的作品并稍作休息。卢浮宫真的是全人类的宝藏。我们约定很快再来探索其他展区。我带着满满的知识和快乐走出了博物馆。"
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
          ipa: "/lə maʁ.ʃe lɔ.kal ɛ tʁɛ za.ni.me ʃak sa.mə.di ma.tɛ̃ dɑ̃ mɔ̃ vi.laʒ. le ze.tal sɔ̃ ma.ɲi.fik e ʁɑ̃.pli də fʁɥi kɔ.lɔ.ʁe, də le.ɡym fʁɛ, də fʁɔ.maʒ aʁ.ti.za.no e də flœʁ paʁ.fy.me. sɛ yn tʁa.di.sjɔ̃ puʁ le za.bi.tɑ̃ də və.niʁ i.si tʁɛ to puʁ ʃwa.ziʁ le mɛ.jœʁ pʁɔ.dɥi də la ʁe.ʒjɔ̃. ɔ̃ pø vwaʁ de pɔm ʁuʒ, de pwaʁ ʒy.tøz e de tɔ.mat bjɛ̃ myʁ. le vɑ̃.dœʁ kʁi a.vɛk ɑ̃.tu.zjas.m(ə) puʁ a.ti.ʁe le kli.jɑ̃ vɛʁ lœʁ stɑ̃d/",
          zh: "每到周六早晨，我所在的村庄里的当地市场就非常热闹。摊位非常漂亮，摆满了色彩鲜艳的水果、新鲜蔬菜、手工奶酪和芬芳的花朵。当地居民早早赶来挑选该地区最好的产品已成为一种传统。你可以看到红红的苹果、多汁的梨和熟透的西红柿。摊主们充满热情地吆喝，吸引顾客到他们的摊位前。"
        },
        {
          fr: "Les enfants courent joyeusement entre les allées étroites pendant que leurs parents examinent attentivement les prix et la qualité. On peut sentir partout l'odeur merveilleuse du pain frais qui sort du four. On entend aussi les discussions très animées sur les légumes de saison et les nouvelles du quartier. C'est un moment de rencontre sociale important pour tout le monde ici. Les gens se saluent, discutent de la météo et partagent des recettes de cuisine traditionnelles.",
          ipa: "/le zɑ̃.fɑ̃ kuʁ ʒwa.jøz.mɑ̃ ɑ̃.tʁə le za.le e.tʁwat pɑ̃.dɑ̃ kə lœʁ pa.ʁɑ̃ ɛɡ.za.min a.tɑ̃.tiv.mɑ̃ le pʁi e la ka.li.te. ɔ̃ pø sɑ̃.tiʁ paʁ.tu lɔ.dœʁ mɛʁ.vɛ.jøz dy pɛ̃ fʁɛ ki sɔʁ dy fuʁ. ɔ̃ ɑ̃.tɑ̃ o.si le dis.ky.sjɔ̃ tʁɛ za.ni.me syʁ le le.ɡym də sɛ.zɔ̃ e le nu.vɛl dy ka.ʁtje. sɛ œ̃ mɔ.mɑ̃ də ʁɑ̃.kɔ̃.tʁə sɔ.sjal ɛ̃.pɔʁ.tɑ̃ puʁ tu lə mɔ̃d i.si. le ʒɑ̃ sə sa.ly, dis.kyt də la me.te.o e paʁ.taʒ de ʁə.sɛt də kɥi.zin tʁa.di.sjo.nɛl/",
          zh: "孩子们在狭窄的通道间欢快地奔跑，而父母们则仔细检查价格和质量。到处都能闻到刚出炉面包的美妙香味。还能听到关于当季蔬菜和社区新闻的热烈讨论。对这里的每一个人来说，这都是一个重要的社交时刻。人们互相打招呼，讨论天气，分享传统食谱。"
        },
        {
          fr: "Certains vendeurs offrent généreusement des dégustations de fromage de chèvre ou de miel de montagne pour convaincre les clients. Les conversations sont toujours amicales et sincères. Beaucoup de personnes se saluent avec un grand sourire chaleureux car elles se connaissent depuis longtemps. On achète souvent un peu plus que prévu parce que tout semble délicieux. J'aime particulièrement acheter une petite barquette de fraises sucrées pour mon goûter de l'après-midi. Le contact direct est vraiment très agréable.",
          ipa: "/sɛʁ.tɛ̃ vɑ̃.dœʁz ɔfʁ ʒe.ne.ʁøz.mɑ̃ de de.ɡys.ta.sjɔ̃ də fʁɔ.maʒ də ʃɛvʁ u də mjɛl də mɔ̃.taɲ puʁ kɔ̃.vɛ̃.kʁə le kli.jɑ̃. le kɔ̃.vɛʁ.sa.sjɔ̃ sɔ̃ tu.ʒuʁ a.mi.kal e sɛ̃.sɛʁ. bo.ku də pɛʁ.sɔn sə sa.ly a.vɛk œ̃ ɡʁɑ̃ su.ʁiʁ ʃa.lœ.ʁø kaʁ ɛl sə kɔ.nɛs də.pɥi lɔ̃.tɑ̃. ɔ̃ na.ʃɛt su.vɑ̃ œ̃ pø ply kə pʁe.vy paʁs.kə tu sɑ̃bl de.li.sjø. ʒɛm paʁ.ti.ky.ljɛʁ.mɑ̃ a.ʃə.te yn pə.tit baʁ.kɛt də fʁɛz sy.kʁe puʁ mɔ̃ ɡu.te də la.pʁɛ mi.di. lə kɔ̃.takt di.ʁɛkt ɛ vʁɛ.mɑ̃ tʁɛ za.ɡʁe.abl/",
          zh: "一些商贩会慷慨地提供山羊奶酪或高山蜂蜜试吃来吸引顾客。对话总是友好且真诚。许多人互相报以灿烂温暖的微笑，因为他们认识很久了。人们买的东西往往比计划的要多，因为一切看起来都那么美味。我特别喜欢买一小盒甜草莓作为下午点心。这种直接的接触真的很令人愉快。"
        },
        {
          fr: "Le marché est un lieu de rencontre, de partage et de culture locale. Les habitants apprécient énormément ces moments de convivialité et de découverte des bons produits de la terre. C'est l'occasion de soutenir les agriculteurs de notre région. À midi, les paniers sont pleins et le marché commence doucement à fermer. On rentre à la maison avec des sacs lourds mais avec le cœur léger et l'estomac prêt pour un bon repas.",
          ipa: "/lə maʁ.ʃe ɛ œ̃ ljø də ʁɑ̃.kɔ̃.tʁə, də paʁ.taʒ e də kyl.tyʁ lɔ.kal. le za.bi.tɑ̃ a.pʁe.si e.nɔʁ.me.mɑ̃ se mɔ.mɑ̃ de kɔ̃.vi.vja.li.te e de de.ku.vɛʁt de bɔ̃ pʁɔ.dɥi de la tɛʁ. sɛ lɔ.ka.zjɔ̃ de sut.niʁ le za.ɡʁi.kyl.tœʁ de nɔtʁə ʁe.ʒjɔ̃. a mi.di, le pa.nje sɔ̃ plɛ̃ e lə maʁ.ʃe kɔ.mɑ̃s du.sə.mɑ̃ a fɛʁ.me. ɔ̃ ʁɑ̃.tʁə a la mɛ.zɔ̃ a.vɛk de sak luʁ mɛ a.vɛk lə kœʁ le.ʒe e lɛs.tɔ.ma pʁɛ puʁ œ̃ bɔ̃ ʁə.pa/",
          zh: "市场是一个社交、分享和体验当地文化的地方。居民们非常享受这种友好互动以及发现土地馈赠的时刻。这也是支持本地区农民的好机会。中午时分，篮子都装满了，市场也开始慢慢关闭。人们拎着沉重的袋子回家，但心情很轻松，肚子也准备好迎接美餐了。"
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
          fr: "Le soleil brille intensément dans le ciel bleu et la mer Méditerranée est très calme aujourd'hui. Les enfants jouent joyeusement dans le sable doré tandis que les adultes se détendent confortablement sur leurs serviettes colorées. Certains lisent des livres passionnants ou écoutent le bruit relaxant de l'eau. Il fait chaud, donc tout le monde a hâte de se baigner dans l'eau fraîche. La plage est un endroit parfait pour se reposer et oublier tous les soucis de la semaine.",
          ipa: "/lə sɔ.lɛj bʁij ɛ̃.tɑ̃.se.mɑ̃ dɑ̃ lə sjɛl blø e la mɛʁ me.di.tɛ.ʁa.ne ɛ tʁɛ kalm o.ʒuʁ.dɥi. le zɑ̃.fɑ̃ ʒu ʒwa.jøz.mɑ̃ dɑ̃ lə sabl dɔ.ʁe tɑ̃.di kə le za.dylt sə de.tɑ̃d kɔ̃.fɔʁ.ta.blə.mɑ̃ syʁ lœʁ sɛʁ.vjɛt kɔ.lɔ.ʁe. sɛʁ.tɛ̃ li de livʁ pa.sjɔ.nɑ̃ u e.kut lə bʁɥi ʁə.lak.sɑ̃ də lo. il fɛ ʃo, dɔ̃k tu lə mɔ̃d a at də sə bɛ.ɲe dɑ̃ lo fʁɛʃ. la plaʒ ɛ œ̃ nɑ̃.dʁwa paʁ.fɛ puʁ sə ʁə.pɔ.ze e u.bli.je tu le su.si də la sə.mɛn/",
          zh: "阳光在蓝天中灿烂地照耀着，今天的地中海非常平静。孩子们在金色的沙滩上欢快地玩耍，而大人们则舒服地躺在色彩鲜艳的浴巾上放松。有的人在看引人入胜的书，有的则在听着令人放松的水声。天气很热，所以大家都迫不及待想去凉爽的海水里游泳。海滩是一个休息和忘却一周所有烦恼的完美场所。"
        },
        {
          fr: "On peut entendre de loin le bruit régulier des vagues et le rire sincère des enfants qui s'amusent. Certains adolescents pratiquent le surf avec courage tandis que d'autres construisent de grands châteaux de sable avec des fossés. Les mouettes volent au-dessus de nous et cherchent un peu de nourriture sur le bord de l'eau. L'air sent le sel marin et la crème solaire protectrice. C'est une atmosphère de vacances typique que j'adore retrouver chaque été avec ma famille.",
          ipa: "/ɔ̃ pø ɑ̃.tɑ̃.dʁə də lwɛ̃ lə bʁɥi ʁe.ɡy.lje de vaɡ e lə ʁiʁ sɛ̃.sɛʁ de zɑ̃.fɑ̃ ki sa.myz. sɛʁ.tɛ̃ za.dɔ.lɛ.sɑ̃ pʁa.tik lə syʁf a.vɛk ku.ʁaʒ tɑ̃.di kə dɔtʁə kɔ̃s.tʁɥiz de ɡʁɑ̃ ʃa.to de sabl a.vɛk de fɔ.se. le mwɛt vɔl o.də.sy de nu e ʃɛʁʃ œ̃ pø de nu.ʁi.tyʁ syʁ lə bɔʁ de lo. lɛʁ sɑ̃ lə sɛl ma.ʁɛ̃ e la kʁɛm sɔ.lɛʁ pʁɔ.tɛk.tʁis. sɛ yn at.mɔs.fɛʁ de va.kɑ̃s ti.pik kə ʒa.dɔʁ ʁə.tʁu.ve ʃak e.te a.vɛk ma fa.mij/",
          zh: "远远地就能听到规律的海浪声和孩子们开心的笑声。一些青少年勇敢地练习冲浪，而另一些人则在堆沙堡并挖出壕沟。海鸥在我们头顶飞翔，在水边寻找食物。空气中弥漫着海盐和防晒霜的味道。这是我每年夏天和家人一起度假时最喜欢的典型氛围。"
        },
        {
          fr: "Les familles nombreuses pique-niquent à l'ombre fraîche des grands parasols et partagent des boissons très fraîches et des fruits sucrés. On mange des sandwichs au jambon et on boit de la limonade maison. La journée est remplie de rires, de jeux de ballon et de moments de détente absolue sous le soleil. C'est le moment idéal pour discuter tranquillement ou faire une petite sieste à l'ombre. Tout le monde semble heureux et détendu dans ce cadre naturel magnifique.",
          ipa: "/le fa.mij nɔ̃.bʁøz pik.nik a lɔ̃bʁə fʁɛʃ de ɡʁɑ̃ pa.ʁa.zɔl e paʁ.taʒ de bwasɔ̃ tʁɛ fʁɛʃ e de fʁɥi sy.kʁe. ɔ̃ mɑ̃ʒ de sɑ̃.dwitʃ o ʒɑ̃.bɔ̃ e ɔ̃ bwa de la li.mɔ.nad mɛ.zɔ̃. la ʒuʁ.ne ɛ ʁɑ̃.pli de ʁiʁ, de ʒø de ba.lɔ̃ e de mɔ.mɑ̃ de de.tɑ̃t ab.sɔ.ly su lə sɔ.lɛj. sɛ lə mɔ.mɑ̃ i.de.al puʁ dis.ky.te tʁɑ̃.kil.mɑ̃ u fɛʁ yn pə.tit sjɛst a lɔ̃bʁə. tu lə mɔ̃d sɑ̃bl ø.ʁø e de.tɑ̃.dy dɑ̃ sə kadʁə na.ty.ʁɛl ma.ɲi.fik/",
          zh: "大家庭在遮阳伞凉爽的阴影下野餐，分享着冰凉的饮料和甜美的水果。人们吃着火腿三明治，喝着自制的柠檬水。这一天充满了欢笑、球类游戏和阳光下绝对的放松。这是静静聊天或在阴凉处打个小盹的理想时刻。在这个美丽的自然环境中，每个人看起来都很快乐且放松。"
        },
        {
          fr: "À la fin de la journée, tout le monde ramasse soigneusement ses affaires pour laisser la plage propre. On admire ensemble le magnifique coucher du soleil qui colore le ciel en orange et en violet. Les couleurs sont incroyables et changent chaque minute. C'est un spectacle naturel que nous n'oublions jamais. Après cela, nous rentrons fatigués mais très contents chez nous. Nous avons hâte de revenir demain pour profiter encore une fois de cette belle plage et de la mer.",
          ipa: "/a la fɛ̃ de la ʒuʁ.ne, tu lə mɔ̃d ʁa.mas swa.ɲøz.mɑ̃ se za.fɛʁ puʁ le.se la plaʒ pʁɔ.pʁə. ɔ̃ na.dmiʁ ɑ̃.sɑ̃bl lə ma.ɲi.fik ku.ʃe dy sɔ.lɛj ki kɔ.lɔʁ lə sjɛl ɑ̃ ɔ.ʁɑ̃ʒ e ɑ̃ vjo.lɛ. le ku.lœʁ sɔ̃ ɛ̃.kʁwa.jabl e ʃɑ̃ʒ ʃak mi.nyt. sɛ œ̃ spɛk.takl na.ty.ʁɛl kə nu nu.bli.jɔ̃ ʒa.mɛ. a.pʁɛ sə.la, nu ʁɑ̃.tʁɔ̃ fa.ti.ɡe mɛ tʁɛ kɔ̃.tɑ̃ ʃe nu. nu za.vɔ̃ at de ʁə.və.niʁ de.mɛ̃ puʁ pʁɔ.fi.te ɑ̃.kɔʁ yn fwa de sɛt bɛl plaʒ e de la mɛʁ/",
          zh: "一天结束时，每个人都仔细收拾好自己的东西，保持海滩整洁。我们一起欣赏壮丽的日落，夕阳将天空染成了橙色和紫色。色彩美得不可思议，每分钟都在变化。这是我们永远不会忘记的自然奇观。之后，我们疲惫但非常开心地回家。我们迫不及待想明天再来，再次享受这片美丽的海滩和大海。"
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
            fr: "Ce soir, toute ma famille se réunit pour un grand dîner spécial à la maison. Ma mère prépare un délicieux poulet rôti avec des pommes de terre au four. L'odeur de la cuisine est merveilleuse et remplit toutes les pièces. Mon père met la table avec soin : il pose les assiettes, les verres et les serviettes blanches. Mes deux frères aident à préparer une grande salade de fruits frais pour le dessert. C'est un moment de préparation très joyeux et animé.",
            ipa: "/sə swaʁ, tut ma fa.mij sə ʁe.y.ni puʁ œ̃ ɡʁɑ̃ di.ne spe.sjal a la mɛ.zɔ̃. ma mɛʁ pʁe.paʁ œ̃ de.li.sjø pu.lɛ ʁo.ti a.vɛk de pɔm de tɛʁ o fuʁ. lɔ.dœʁ de la kɥi.zin ɛ mɛʁ.vɛ.jøz e ʁɑ̃.pli tut le pjɛs. mɔ̃ pɛʁ mɛ la tabl a.vɛk swɛ̃ : il poz le za.sjɛt, le vɛʁ e le sɛʁ.vjɛt blɑ̃ʃ. me dø fʁɛʁ ɛd a pʁe.pa.ʁe yn ɡʁɑ̃d sa.lad de fʁɥi fʁɛ puʁ lə de.sɛʁ. sɛ œ̃ mɔ.mɑ̃ de pʁe.pa.ʁa.sjɔ̃ tʁɛ ʒwa.jø e za.ni.me/",
            zh: "今晚，全家人聚在家里吃一顿特别的大餐。妈妈正在准备美味的烤鸡和烤土豆。厨房里的香味美妙极了，飘满了每个房间。爸爸正在用心地摆餐具：他摆好了盘子、玻璃杯和白餐巾。我的两个兄弟正在帮忙准备一大份新鲜水果沙拉作为甜点。这是一个非常快乐而热闹的准备时刻。"
          },
          {
            fr: "À vingt heures, nous nous asseyons tous autour de la grande table en bois. Mon grand-père raconte des histoires amusantes de sa jeunesse, et nous rions tous beaucoup. Nous mangeons lentement pour profiter de chaque saveur. Ma mère est une excellente cuisinière et tout le monde la félicite pour le repas. Nous buvons de l'eau minérale et un peu de jus de pomme. L'ambiance est très chaleureuse et remplie d'amour. J'aime ces soirées où nous partageons nos expériences de la journée.",
            ipa: "/a vɛ̃t œʁ, nu nu za.se.jɔ̃ tus o.tuʁ de la ɡʁɑ̃d tabl ɑ̃ bwa. mɔ̃ ɡʁɑ̃.pɛʁ ʁa.kɔ̃t de ziz.twaʁ a.my.zɑ̃t de sa ʒœ.nɛs, e nu ʁjɔ̃ tus bo.ku. nu mɑ̃.ʒɔ̃ lɑ̃t.mɑ̃ puʁ pʁɔ.fi.te de ʃak sa.vœʁ. ma mɛʁ ɛ ty.nɛk.sɛ.lɑ̃t kɥi.zi.njɛʁ e tu lə mɔ̃d la fe.li.sit puʁ lə ʁə.pa. nu by.vɔ̃ də lo mi.ne.ʁal e œ̃ pø de ʒy de pɔm. lɑ̃.bjɑ̃s ɛ tʁɛ ʃa.lœ.ʁøz e ʁɑ̃.pli da.muʁ. ʒɛm se swa.ʁe u nu paʁ.ta.ʒɔ̃ no zɛks.pe.ʁjɑ̃s de la ʒuʁ.ne/",
            zh: "八点钟，我们大家都围坐在大木桌旁。爷爷讲述着他年轻时的趣事，我们都笑得很开心。我们慢慢地吃着，享受每一种味道。我妈妈是个出色的厨师，大家都称赞她做的菜。我们喝着矿泉水和一点苹果汁。气氛非常温馨，充满了爱。我喜欢这些分享一天经历的夜晚。"
          },
          {
            fr: "Après le plat principal, nous dégustons la salade de fruits préparée par mes frères. Elle est très rafraîchissante et sucrée. Ensuite, mon père apporte un plateau de fromages variés avec du pain frais. C'est une tradition française importante de manger du fromage à la fin du repas. Nous discutons de nos projets pour le week-end prochain. Mon frère veut aller au cinéma et ma mère préfère faire une promenade en forêt. Nous écoutons les avis de chacun avec respect et attention.",
            ipa: "/a.pʁɛ lə pla pʁɛ̃.si.pal, nu de.ɡys.tɔ̃ la sa.lad de fʁɥi pʁe.pa.ʁe paʁ me fʁɛʁ. ɛl ɛ tʁɛ ʁa.fʁɛ.ʃi.sɑ̃t e sy.kʁe. ɑ̃.sɥit, mɔ̃ pɛʁ a.pɔʁt œ̃ pla.to de fʁɔ.maʒ va.ʁje a.vɛk dy pɛ̃ fʁɛ. sɛ yn tʁa.di.sjɔ̃ fʁɑ̃.sɛz ɛ̃.pɔʁ.tɑ̃t de mɑ̃.ʒe dy fʁɔ.maʒ a la fɛ̃ dy ʁə.pa. nu dis.ky.tɔ̃ de no pʁɔ.ʒɛ puʁ lə wik.ɛnd pʁɔ.ʃɛ̃. mɔ̃ fʁɛʁ vø ta.le o si.ne.ma e ma mɛʁ pʁe.fɛʁ fɛʁ yn pʁɔ.mə.nad ɑ̃ fɔ.ʁɛ. nu ze.ku.tɔ̃ le za.vi de ʃa.kœ̃ a.vɛk ʁɛs.pɛ e a.tɑ̃.sjɔ̃/",
            zh: "主菜之后，我们品尝兄弟们准备的水果沙拉。它非常清爽香甜。然后，爸爸端来一盘各式各样的奶酪和新鲜面包。餐后吃奶酪是法国一项重要的传统。我们讨论下周末的计划。我哥哥想去电影院，妈妈更想去森林里散步。我们尊重并细心地听取每个人的意见。"
          },
          {
            fr: "Enfin, la soirée se termine et nous aidons tous à débarrasser la table et à faire la vaisselle. C'est un travail d'équipe rapide et efficace. Je me sens très heureux et reconnaissant d'avoir une famille si unie. Avant de dormir, nous nous embrassons et nous nous disons bonne nuit. Ces moments simples sont les plus précieux dans la vie quotidienne. Je m'endors avec le sourire, en pensant déjà à notre prochain rassemblement familial.",
            ipa: "/ɑ̃.fɛ̃, la swa.ʁe sə tɛʁ.min e nu ze.dɔ̃ tus a de.ba.ʁa.se la tabl e a fɛʁ la vɛ.sɛl. sɛ œ̃ tʁa.vaj de.kip ʁa.pid e e.fi.kas. ʒə mə sɑ̃ tʁɛ ø.ʁø e ʁə.kɔ.nɛ.sɑ̃ da.vwaʁ yn fa.mij si y.ni. a.vɑ̃ de dɔʁ.miʁ, nu nu zɑ̃.bʁa.sɔ̃ e nu nu di.zɔ̃ bɔn nɥi. se mɔ.mɑ̃ sɛ̃pl sɔ̃ le ply pʁe.sjø dɑ̃ la vi kɔ.ti.djɛn. ʒə mɑ̃.dɔʁ a.vɛk lə su.ʁiʁ, ɑ̃ pɑ̃.sɑ̃ de.ʒa a nɔ.tʁə pʁɔ.ʃɛ̃ ʁa.sɑ̃.blə.mɑ̃ fa.mi.ljal/",
            zh: "最后，晚会结束了，我们大家都帮忙收拾桌子、洗碗。这是一项快速高效的团队合作。我感到非常幸福和感激，能有一个如此团结的家庭。睡觉前，我们互相拥抱，互道晚安。这些简单的时刻是日常生活中最珍贵的。我带着微笑入睡，已经在期待下一次家庭聚会了。"
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
          fr: "La France est mondialement célèbre pour sa gastronomie riche et variée. Chaque région possède ses propres spécialités culinaires uniques. En Bretagne, on déguste les fameuses crêpes et galettes avec du cidre local. C'est une tradition très ancienne qui attire de nombreux touristes chaque année. Les ingrédients sont simples : de la farine, des œufs, du lait et beaucoup de beurre salé. Les Bretons sont très fiers de leur patrimoine culinaire et partagent volontiers leurs secrets avec les visiteurs curieux.",
          ipa: "/la fʁɑ̃s ɛ mɔ̃.djal.mɑ̃ se.lɛbʁ puʁ sa ɡas.tʁɔ.nɔ.mi ʁiʃ e va.ʁje. ʃak ʁe.ʒjɔ̃ pɔ.sɛd se pʁɔ.pʁə spe.sja.li.te ky.li.nɛʁ y.nik. ɑ̃ bʁə.taɲ, ɔ̃ de.ɡys.te le fa.møz kʁɛp e ɡa.lɛt a.vɛk dy si.dʁ lɔ.kal. sɛ yn tʁa.di.sjɔ̃ tʁɛ zɑ̃.sjɛn ki a.tiʁ de nɔ̃.bʁø tu.ʁist ʃak a.ne. le zɛ̃.ɡʁe.djɑ̃ sɔ̃ sɛ̃pl : də la fa.ʁin, de zø, dy lɛ e bo.ku də bœʁ sa.le. le bʁə.tɔ̃ sɔ̃ tʁɛ fje de lœʁ pa.tʁi.mwan ky.li.nɛʁ e paʁ.taʒ vɔ.lɔ̃.tje lœʁ sə.kʁɛ a.vɛk le vi.zi.tœʁ ky.ʁjø/",
          zh: "法国因其丰富多样的美食而闻名于世。每个地区都有自己独特的烹饪特色。在布列塔尼，人们品尝著名的可丽饼和咸荞麦饼，配上当地的苹果酒。这是一个非常古老的传统，每年吸引着众多游客。食材很简单：面粉、鸡蛋、牛奶和大量的咸黄油。布列塔尼人对他们的烹饪遗产感到非常自豪，并乐于向好奇的游客分享他们的秘诀。"
        },
        {
          fr: "Dans le Sud de la France, la cuisine est influencée par le soleil et la mer Méditerranée. On utilise beaucoup d'huile d'olive, d'ail frais et d'herbes de Provence parfumées. La bouillabaisse est le plat emblématique de la ville de Marseille. C'est une soupe de poissons délicieuse servie avec de la rouille. Les marchés du Sud sont remplis de légumes colorés comme les tomates, les poivrons rouges et les aubergines. C'est une cuisine très saine qui reflète parfaitement la joie de vivre des habitants.",
          ipa: "/dɑ̃ lə syd de la fʁɑ̃s, la kɥi.zin ɛ ɛ̃.fly.ɑ̃.se paʁ lə sɔ.lɛj e la mɛʁ me.di.tɛ.ʁa.ne. ɔ̃ y.ti.liz bo.ku dɥil dɔ.liv, da.j fʁɛ e dɛʁb de pʁɔ.vɑ̃s paʁ.fy.me. la bu.ja.bɛs ɛ lə pla ɑ̃.ble.ma.tik de la vil de maʁ.sɛj. sɛ yn sup de pwa.sɔ̃ de.li.sjøz sɛʁ.vi a.vɛk de la ʁyj. le maʁ.ʃe dy syd sɔ̃ ʁɑ̃.pli de le.ɡym kɔ.lɔ.ʁe kɔm le tɔ.mat, le pwa.vʁɔ̃ ʁuʒ e le zo.bɛʁ.ʒin. sɛ yn kɥi.zin tʁɛ sɛn ki ʁə.flɛt paʁ.fɛt.mɑ̃ la ʒwa de vivʁ de za.bi.tɑ̃/",
          zh: "在法国南部，烹饪受到阳光和地中海的影响。人们大量使用橄榄油、新鲜大蒜和芬芳的普罗旺斯香草。马赛鱼汤是马赛这座城市的标志性菜肴。这是一种美味的鱼汤，配上辣味蛋黄酱。南方的市场摆满了鲜艳的蔬菜，如西红柿、红椒和茄子。这是一种非常健康的饮食方式，完美地反映了当地居民对生活的热爱。"
        },
        {
          fr: "En Alsace, à l'est du pays, la choucroute est le plat principal incontournable pour les grandes occasions. Elle est préparée avec du chou fermenté et différentes sortes de charcuterie locale. Les vins blancs d'Alsace sont également réputés pour leur finesse et leur arôme fruité. C'est une region où les traditions sont très fortes, surtout pendant la période magique de Noël avec ses marchés. On y mange aussi le kouglof, une brioche en forme de couronne avec des raisins secs.",
          ipa: "/ɑ̃ nal.zas, a lɛst dy pe.i, la ʃu.kʁut ɛ lə pla pʁɛ̃.si.pal ɛ̃.kɔ̃.tuʁ.na.blə puʁ le ɡʁɑ̃d zo.ka.zjɔ̃. ɛl ɛ pʁe.pa.ʁe a.vɛk dy ʃu fɛʁ.mɑ̃.te e di.fe.ʁɑ̃t sɔʁt de ʃaʁ.ky.tʁi lɔ.kal. le vɛ̃ blɑ̃ dal.zas sɔ̃ e.ɡal.mɑ̃ ʁe.py.te puʁ lœʁ fi.nɛs e lœʁ a.ʁɔm fʁɥi.te. sɛ yn ʁe.ʒjɔ̃ u le tʁa.di.sjɔ̃ sɔ̃ tʁɛ fɔʁt, syʁ.tu pɑ̃.dɑ̃ la pe.ʁjɔd ma.ʒik de nɔ.ɛl a.vɛk se maʁ.ʃe. ɔ̃ i mɑ̃ʒ o.si lə ku.ɡlɔf, yn bʁi.jɔʃ ɑ̃ fɔʁm de ku.ʁɔn a.vɛk de ʁɛ.zɛ̃ sɛk/",
          zh: "在位于国家东部的阿尔萨斯，酸菜是重大场合中不可或缺的主菜。它是用发酵的卷心菜和各种当地熏制肉类准备的。阿尔萨斯的白葡萄酒也因其精致和果香味而闻名。这是一个传统底蕴深厚的地区，特别是在带有圣诞集市的神奇圣诞期间。人们在那里也会吃奶油圆蛋糕，一种带有葡萄干的皇冠形状的布里欧修面包。"
        },
        {
          fr: "Enfin, à Lyon, la capitale mondiale de la gastronomie, on trouve les fameux 'bouchons' lyonnais. Ce sont des restaurants typiques qui servent des spécialités généreuses comme la quenelle ou la tarte à la praline rose. La cuisine lyonnaise est conviviale et chaleureuse. Il est important de réserver une table car ces endroits sont très populaires. Découvrir la France à travers ses plats est un voyage extraordinaire pour les papilles. Chaque repas est une véritable célébration de l'art de vivre français.",
          ipa: "/ɑ̃.fɛ̃, a ljɔ̃, la ka.pi.tal mɔ̃.djal de la ɡas.tʁɔ.nɔ.mi, ɔ̃ tʁuv le fa.mø bu.ʃɔ̃ ljo.nɛ. se se sɔ̃ de ʁɛs.tɔ.ʁɑ̃ ti.pik ki sɛʁv de spe.sja.li.te ʒe.ne.ʁøz kɔm la kə.nɛl u la taʁt a la pʁa.lin ʁɔz. la kɥi.zin ljo.nɛz ɛ kɔ̃.vi.vjal e ʃa.lœ.ʁøz. i l ɛ ɛ̃.pɔʁ.tɑ̃ de ʁe.zɛʁ.ve yn tabl kaʁ se zɑ̃.dʁwa sɔ̃ tʁɛ pɔ.py.lɛʁ. de.ku.vʁiʁ la fʁɑ̃s a tʁa.vɛʁ se pla ɛ œ̃ vwa.jaʒ ɛks.tʁa.ɔʁ.di.nɛʁ puʁ le pa.pij. ʃak ʁə.pa ɛ yn ve.ʁi.ta.blə se.le.bʁa.sjɔ̃ de laʁ de vivʁ fʁɑ̃.sɛ/",
          zh: "最后，在世界美食之都里昂，你可以找到著名的里昂“小馆”（bouchons）。这些是提供鱼肉丸或粉红杏仁挞等丰盛特色菜的典型餐厅。里昂菜既欢乐又温暖。订位非常重要，因为这些地方非常受欢迎。通过菜肴探索法国是对味蕾的一次非凡旅行。每一餐都是对法式生活艺术的真正庆祝。"
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
          ipa: "/lə tuʁ de fʁɑ̃s ɛ la kɔ̃.pe.ti.sjɔ̃ si.klist la ply se.lɛbʁ e la ply di.fi.sil o mɔ̃d ɑ̃.tje. kʁe.e ɑ̃ mil nœf sɑ̃ tʁwa paʁ ɑ̃.ʁi de.ɡʁɑ̃ʒ, sɛt kuʁs paʁ e.tap dyʁ tʁwa sə.mɛn ʃak e.te pɑ̃.dɑ̃ lə mwa de ʒɥi.jɛ. ɛl tʁa.vɛʁs le ply bo pe.i.zaʒ de fʁɑ̃s, de plɛn vɛʁ.dwa.jɑ̃t o sɔ.mɛ ɛs.kaʁ.pe de zalp e de pi.ʁe.ne. puʁ le fʁɑ̃.sɛ, sɛ bjɛ̃ ply kyn sɛ̃pl e.pʁœv spɔʁ.tiv, sɛ œ̃ le.vɛn.mɑ̃ na.sjɔ.nal ki ʁa.sɑ̃bl le ʒɑ̃/",
          zh: "环法自行车赛是全世界最著名、也是最艰难的自行车比赛。该赛事由亨利·德斯格朗吉于1903年创立，每年夏季的七月分阶段进行，持续三周。它横跨法国最美丽的风景，从郁郁葱葱的平原到阿尔卑斯山和比利牛斯山险峻的山峰。对法国人来说，这不仅仅是一项体育竞技，更是一个凝聚人心、全民参与的盛会。"
        },
        {
          fr: "Les coureurs doivent faire preuve d'une endurance exceptionnelle pour terminer la course. Chaque jour, ils parcourent environ cent soixante kilomètres sous le soleil ou la pluie. Il y a différentes catégories de maillots pour récompenser les meilleurs. Le plus prestigieux est le 'maillot jaune', porté par le leader du classement général. On trouve aussi le maillot vert pour le meilleur sprinteur et le maillot à pois rouges pour le meilleur grimpeur en montagne.",
          ipa: "/le ku.ʁœʁ dwav fɛʁ pʁœv dyn ɑ̃.dy.ʁɑ̃s ɛks.sɛp.sjɔ.nɛl puʁ tɛʁ.mi.ne la kuʁs. ʃak ʒuʁ, il paʁ.ku.ʁɑ̃ ɑ̃.vi.ʁɔ̃ sɑ̃ swa.sɑ̃t ki.lɔ.mɛtʁ su lə sɔ.lɛj u la plɥi. i l i a di.fe.ʁɑ̃t ka.te.ɡɔ.ʁi de ma.jo puʁ ʁe.kɔ̃.pɑ̃.se le mɛ.jœʁ. lə ply pʁɛs.ti.ʒjø ɛ lə ma.jo ʒon, pɔʁ.te paʁ lə li.dœʁ dy kla.sə.mɑ̃ ʒe.ne.ʁal. ɔ̃ tʁuv o.si lə ma.jo vɛʁ puʁ lə mɛ.jœʁ spʁɛn.tœʁ e lə ma.jo a pwa ʁuʒ puʁ lə mɛ.jœʁ ɡʁɛ̃.pœʁ ɑ̃ mɔ̃.taɲ/",
          zh: "车手们必须表现出非凡的耐力才能完成比赛。每天，他们都要在烈日或风雨中骑行约160公里。比赛设有不同种类的领骑衫来奖励优秀选手。最负盛名的是由总成绩领先者穿的“黄衫”。此外，还有奖给最佳冲刺手的绿衫，以及奖给最佳登山选手的圆点衫。"
        },
        {
          fr: "L'ambiance autour du Tour est incroyablement festive. Avant le passage des cyclistes, la célèbre 'caravane publicitaire' distribue des milliers de petits cadeaux et de gadgets aux spectateurs enthousiastes. C'est un moment de grande joie pour les enfants et les parents. Les gens préparent souvent des pique-niques géants et passent la journée entière au bord de la route à attendre leurs héros. On décore les routes avec des drapeaux et on écrit des messages d'encouragement.",
          ipa: "/lɑ̃.bjɑ̃s o.tuʁ dy tuʁ ɛ ɛ̃.kʁwa.jablə.mɑ̃ fɛs.tiv. a.vɑ̃ lə pa.saʒ de si.klist, la se.lɛbʁ ka.ʁa.van py.bli.si.tɛʁ dis.tʁi.by de mi.lje de pə.ti ka.do e de ɡad.ʒɛt o spɛk.ta.tœʁ ɑ̃.tu.zjast. sɛ œ̃ mɔ.mɑ̃ de ɡʁɑ̃d ʒwa puʁ le zɑ̃.fɑ̃ e le pa.ʁɑ̃. le ʒɑ̃ pʁe.paʁ su.vɑ̃ de pik.nik ʒe.ɑ̃ e pas la ʒuʁ.ne ɑ̃.tjɛʁ o bɔʁ de la ʁut a a.tɑ̃.dʁə lœʁ e.ʁo. ɔ̃ de.kɔʁ le ʁut a.vɛk de dʁa.po e ɔ̃ ne.kʁi de me.saʒ dɑ̃.ku.ʁaʒ.mɑ̃/",
          zh: "环法赛周边的氛围极其欢乐。在自行车手经过之前，著名的“广告宣传车队”会向热情的观众分发数千件小礼品和小玩意。这对孩子和父母来说都是非常开心的时刻。人们通常会准备盛大的野餐，在路边花上一整天等待他们的英雄。人们用旗帜装饰道路，并写下鼓励的话语。"
        },
        {
          fr: "La dernière étape se termine traditionnellement sur l'avenue prestigieuse des Champs-Élysées à Paris. C'est un moment très émouvant où le vainqueur célèbre son triomphe final avec son équipe. Monter sur le podium est le rêve de tout cycliste professionnel. Le Tour de France reste un symbole fort de persévérance, de courage et de dépassement de soi. Chaque année, une nouvelle page de l'histoire du sport s'écrit sur les routes de France, captivant des millions de spectateurs.",
          ipa: "/la dɛʁ.njɛʁ e.tap sə tɛʁ.min tʁa.di.sjɔ.nɛl.mɑ̃ syʁ la.və.ny pʁɛs.ti.ʒjøz de ʃɑ̃.ze.li.ze a pa.ʁi. sɛ œ̃ mɔ.mɑ̃ tʁɛ ze.mu.vɑ̃ u lə vainqueur se.lɛbʁ sɔ̃ tʁi.ɔ̃f fi.nal a.vɛk sɔ̃ e.kip. mɔ̃.te syʁ lə pɔ.djɔm ɛ lə ʁɛv de tu si.klist pʁɔ.fɛ.sjo.nɛl. lə tuʁ de fʁɑ̃s ʁɛst œ̃ sɛ̃.bɔl fɔʁ de pɛʁ.se.ve.ʁɑ̃s, de ku.ʁaʒ e de de.pa.sə.mɑ̃ de swa. ʃak a.ne, yn nu.vɛl paʒ de lis.twaʁ dy spɔʁ se.kʁi syʁ le ʁut de fʁɑ̃s, kap.ti.vɑ̃ de mi.ljɔ̃ de spɛk.ta.tœʁ/",
          zh: "最后一站传统上在巴黎著名的香榭丽舍大街结束。这是一个非常动人的时刻，获胜者与他的团队一起庆祝最终的胜利。登上领奖台是每个职业自行手的梦想。环法自行车赛始终是毅力、勇气和超越自我的有力象征。每年，在法国的公路上都会谱写体育史的新篇章，吸引着数百万观众。"
        }
      ],
      keywords: [
        { word: "compétition", ipa: "/kɔ̃.pe.ti.sjɔ̃/", zh: "竞赛/比赛" },
        { word: "étapes", ipa: "/e.tap/", zh: "阶段/赛段" },
        { word: "maillot", ipa: "/ma.jo/", zh: "运动衫/领骑衫" },
        { word: "endurance", ipa: "/ɑ̃.dy.ʁɑ̃s/", zh: "耐力" },
        { word: "triomphe", ipa: "/tʁi.ɔ̃f/", zh: "凯旋/胜利" },
        { word: "persévérance", ipa: "/pɛʁ.se.ve.ʁɑ̃s/", zh: "毅力/坚持" }
      ]
    },
    {
        id: 'a2-3',
        level: 'A2',
        title: { fr: "Le Cinéma Français : Une Histoire d'Amour", zh: "法国电影：一段爱之往事" },
        paragraphs: [
          {
            fr: "Le cinéma français occupe une place privilégiée dans le cœur des cinéphiles du monde entier. Depuis l'invention du cinématographe par les frères Lumière en 1895, la France a toujours été à la pointe de l'innovation cinématographique. Les premiers films étaient des scènes simples de la vie quotidienne, mais ils ont immédiatement captivé le public. Aujourd'hui, le cinéma français est reconnu pour sa diversité, son style artistique unique et sa capacité à raconter des histoires humaines profondes avec une grande sensibilité.",
            ipa: "/lə si.ne.ma fʁɑ̃.sɛ ɔ.kyp yn plas pʁi.vi.le.ʒje dɑ̃ lə kœʁ de si.ne.fil dy mɔ̃d ɑ̃.tje. də.pɥi lɛ̃.vɑ̃.sjɔ̃ dy si.ne.ma.tɔ.ɡʁaf paʁ le fʁɛʁ ly.mjɛʁ ɑ̃ mil ɥit sɑ̃ katʁ.vɛ̃ kɛ̃z, la fʁɑ̃s a tu.ʒuʁ e.te a la pwɛ̃t de li.nɔ.va.sjɔ̃ si.ne.ma.tɔ.ɡʁa.fik. le pʁə.mje film e.tɛ de sɛn sɛ̃pl de la vi kɔ.ti.djɛn, mɛ i l ɔ̃t i.me.djat.mɑ̃ kap.ti.ve lə py.blik/",
            zh: "法国电影在全球影迷心中占据着特殊地位。自1895年卢米埃尔兄弟发明电影机以来，法国一直走在电影创新的前沿。最早的电影是简单的日常生活场景，但它们立即吸引了观众。如今，法国电影以其多样性、独特的艺术风格以及以极大的敏感度讲述深刻的人性故事的能力而闻名。"
          },
          {
            fr: "Chaque année, le Festival de Cannes est l'un des événements les plus prestigieux de l'industrie cinématographique mondiale. Situé sur la Côte d'Azur, ce festival attire des réalisateurs, des acteurs et des journalistes de tous les pays. Gagner la 'Palme d'Or' est la récompense ultime pour un film d'auteur. Pendant deux semaines en mai, la ville de Cannes devient la capitale mondiale du cinéma. C'est l'occasion de découvrir de nouveaux talents et de célébrer le talent des grands maîtres confirmés sous les projecteurs.",
            ipa: "/ʃak a.ne, lə fɛs.ti.val de kan ɛ lœ̃ de ze.vɛ.nə.mɑ̃ le ply pʁɛs.ti.ʒjø de lɛ̃.dys.tʁi si.ne.ma.tɔ.ɡʁa.fik mɔ̃.djal. si.tɥe syʁ la kot da.zyʁ, sə fɛs.ti.val a.tiʁ de ʁe.a.li.za.tœʁ, de za.ktœʁ e de ʒuʁ.na.list de tu le pe.i. ɡa.ɲe la palm dɔʁ ɛ la ʁe.kɔ̃.pɑ̃s yl.tim puʁ œ̃ film do.tœʁ/",
            zh: "每年，戛纳电影节都是全球电影业最负盛名的活动之一。该电影节位于蔚蓝海岸，吸引了来自世界各地的导演、演员和记者。赢得“金棕榈奖”是艺术电影的最高奖励。在五月的两周里，戛纳成为世界电影之都。这是发现新秀并庆祝大师才华的机会。"
          },
          {
            fr: "Les Français aiment passionnément aller au cinéma. Il existe de nombreuses salles indépendantes et des grands complexes modernes dans toutes les villes. Le cinéma est considéré en France comme le 'septième art'. Le gouvernement soutient activement la production nationale pour préserver cette richesse culturelle face à la concurrence internationale. De nombreux films français rencontrent également un grand succès à l'étranger, exportant ainsi la langue française et l'élégance de la culture de l'Hexagone à travers les écrans mondiaux.",
            ipa: "/le fʁɑ̃.sɛ ɛm pa.sjɔ.ne.mɑ̃ a.le o si.ne.ma. i l ɛɡ.zist de nɔ̃.bʁøz sal ɛ̃.de.pɑ̃.dɑ̃t e de ɡʁɑ̃ kɔ̃.plɛks mɔ.dɛʁn dɑ̃ tut le vil. lə si.ne.ma ɛ kɔ̃.si.de.ʁe ɑ̃ fʁɑ̃s kɔm lə sɛ.tjɛm aʁ. lə ɡu.vɛʁ.nə.mɑ̃ su.tjɛ̃ ak.tiv.mɑ̃ la pʁɔ.dyk.sjɔ̃ na.sjɔ.nal puʁ pʁe.zɛʁ.ve sɛt ʁi.ʃɛs kyl.ty.ʁɛl fa.s a la kɔ̃.ky.ʁɑ̃s ɛ̃.tɛʁ.na.sjo.nal/",
            zh: "法国人非常热爱去影院。各大城市既有许多独立影院，也有现代化的影城。在法国，电影被视为“第七艺术”。政府积极支持国内制作，以在国际竞争中保留这一文化财富。许多法国电影在国外也取得了巨大成功，向全球出口了法语和法兰西文化的优雅。"
          },
          {
            fr: "En conclusion, le cinéma français est un miroir de la société et un vecteur important d'émotions partagées. Que ce soit à travers les comédies légères, les drames intenses ou les films d'animation innovants, il continue de surprendre et d'émerveiller. Regarder des films français est aussi une excellente façon pour les étudiants d'améliorer leur compréhension de la langue et de découvrir les nuances de la vie en France. C'est une porte ouverte sur un univers créatif sans fin et une source d'inspiration constante.",
            ipa: "/ɑ̃ kɔ̃.kly.zjɔ̃, lə si.ne.ma fʁɑ̃.sɛ ɛ œ̃ mi.ʁwaʁ de la sɔ.sje.te e œ̃ vɛk.tœʁ ɛ̃.pɔʁ.tɑ̃ de.mu.sjɔ̃ paʁ.ta.ʒe. kə sə swa a tʁa.vɛʁ le kɔ.me.di le.ʒɛʁ, le dʁam ɛ̃.tɑ̃s u le film da.ni.ma.sjɔ̃ i.nɔ.vɑ̃, il kɔ̃.ti.ny de syʁ.pʁɑ̃dʁ e de.mɛʁ.vɛ.je. ʁə.ɡaʁ.de de film fʁɑ̃.sɛ ɛ o.si ty.nɛk.sɛ.lɑ̃t fa.sɔ̃ puʁ le ze.ty.djɑ̃ da.me.ljɔ.ʁe lœʁ kɔ̃.pʁe.ɑ̃.sjɔ̃/",
            zh: "总之，法国电影是社会的缩影，也是共享情感的重要媒介。无论是轻松的喜剧、激烈的剧情片还是创新的动画片，它都在不断带来惊喜和奇迹。看法国电影也是学生提高语言理解能力、发现法国生活细微差别的极佳方式。它是通往无穷创意世界的大门。"
          }
        ],
        keywords: [
          { word: "cinéma", ipa: "/si.ne.ma/", zh: "电影" },
          { word: "réalisation", ipa: "/ʁe.a.li.za.sjɔ̃/", zh: "导演/制作" },
          { word: "prestigieux", ipa: "/pʁɛs.ti.ʒjø/", zh: "享有盛誉的" },
          { word: "récompense", ipa: "/ʁe.kɔ̃.pɑ̃s/", zh: "奖励/报酬" },
          { word: "culturel", ipa: "/kyl.ty.ʁɛl/", zh: "文化的" },
          { word: "émotion", ipa: "/e.mɔ.sjɔ̃/", zh: "情感" }
        ]
    }
  ],
  B1: [
    {
      id: 'b1-1',
      level: 'B1',
      title: { fr: "L'importance de la protection de l'environnement", zh: "环境保护的重要性" },
      paragraphs: [
        {
          fr: "De nos jours, la protection de l'environnement est devenue une priorité mondiale indiscutable. Les changements climatiques, la pollution des océans et la disparition de nombreuses espèces animales nous obligent à repenser notre mode de vie de manière urgente. En France, de nombreuses initiatives voient le jour pour encourager les citoyens à adopter des comportements plus responsables au quotidien. Le tri sélectif des déchets, la réduction de la consommation de plastique et le développement des énergies renouvelables sont des étapes cruciales.",
          ipa: "/de no ʒuʁ, la pʁɔ.tɛk.sjɔ̃ de lɑ̃.vi.ʁɔ.nə.mɑ̃ ɛ de.və.ny yn pʁi.jɔ.ʁi.te mɔ̃.djal ɛ̃.dis.ky.tabl. le ʃɑ̃ʒ.mɑ̃ kli.ma.tik, la pɔ.ly.sjɔ̃ de zɔ.se.ɑ̃ e la dis.pa.ʁi.sjɔ̃ de nɔ̃.bʁø.zɛs.pɛs a.ni.mal nu zo.bliʒ a ʁə.pɑ̃.se nɔ.tʁə mɔd de vi de ma.njɛʁ yʁ.ʒɑ̃t. ɑ̃ fʁɑ̃s, de nɔ̃.bʁø.zɛ̃.ni.sja.tiv vwa lə ʒuʁ puʁ ɑ̃.ku.ʁa.ʒe le si.twa.jɛ̃ a a.dɔp.te de kɔ̃.pɔʁ.tə.mɑ̃ ply ʁɛs.pɔ̃.sabl o kɔ.ti.djɛn/",
          zh: "当今，环境保护已成为无可争议的全球优先事项。气候变化、海洋污染以及许多动物物种的消失迫使我们迫切地重新思考我们的生活方式。在法国，许多倡议纷纷涌现，鼓励公民在日常生活中采取更负责任的行为。垃圾分类、减少塑料消费以及可再生能源的发展是为子孙后代保护地球的关键步骤。"
        },
        {
          fr: "L'éducation joue un rôle fondamental dans cette transition écologique nécessaire. Dès le plus jeune âge, les enfants apprennent à l'école l'importance de respecter la nature et d'économiser les ressources naturelles comme l'eau et l'énergie. Des jardins pédagogiques sont installés dans les cours d'école pour sensibiliser les élèves à la biodiversité locale. Cette prise de conscience collective est essentielle car chaque petit geste compte pour l'avenir de la planète et des prochaines générations.",
          ipa: "/le.dy.ka.sjɔ̃ ʒu œ̃ ʁol fɔ̃.da.mɑ̃.tal dɑ̃ sɛt tʁɑ̃.si.sjɔ̃ e.kɔ.lɔ.ʒik ne.sɛ.sɛʁ. dɛ lə ply ʒœn aʒ, le zɑ̃.fɑ̃ a.pʁɛn a le.kɔl lɛ̃.pɔʁ.tɑ̃s de ʁɛs.pɛk.te la na.tyʁ e de.kɔ.nɔ.mi.ze le ʁə.suʁs na.ty.ʁɛl kɔm lo e le.nɛʁ.ʒi. de ʒaʁ.dɛ̃ pe.da.ɡɔ.ʒik sɔ̃ tɛ̃s.ta.le dɑ̃ le kuʁ de.kɔl puʁ sɑ̃.si.bi.li.ze le ze.lɛv a la bjo.di.vɛʁ.si.te/",
          zh: "教育在这一必要的生态转型中起着基础性作用。从很小的时候起，孩子们就在学校学习尊重自然和节约自然资源（如水和能源）的重要性。学校操场上设立了教学花园，以提高学生对生物多样性的认识。这种集体意识的觉醒至关重要，因为每一个微小的动作都很重要。"
        },
        {
          fr: "Le gouvernement français a également mis en place des lois strictes pour limiter les émissions de gaz à effet de serre. Par exemple, l'interdiction progressive des voitures thermiques au profit des véhicules électriques est un changement majeur pour l'industrie automobile. De plus, les entreprises sont désormais encouragées à réduire leur empreinte carbone par des incitations fiscales attractives. Ces mesures politiques visent à transformer en profondeur la structure de notre économie actuelle pour la rendre plus durable.",
          ipa: "/lə ɡu.vɛʁ.nə.mɑ̃ fʁɑ̃.sɛ a e.ɡal.mɑ̃ mi ɑ̃ plas de lwa stʁikt puʁ li.mi.te le ze.mi.sjɔ̃ de ɡaz a e.fɛ de sɛʁ. paʁ ɛɡ.zɑ̃pl, lɛ̃.tɛʁ.dik.sjɔ̃ pʁɔ.ɡʁɛ.siv de vwa.tyʁ tɛʁ.mik o pʁɔ.fi de ve.i.kyl e.lɛk.tʁik ɛ œ̃ ʃɑ̃ʒ.mɑ̃ ma.ʒœʁ puʁ lɛ̃.dys.tʁi o.tɔ.mɔ.bil/",
          zh: "法国政府还制定了严格的法律来限制温室气体排放。例如，逐步禁止内燃机汽车，转向电动汽车，这是汽车工业的一个重大变化。此外，现在还通过财政奖励鼓励企业减少碳足迹。这些政治措施旨在深刻改变我们的经济结构，使其更具可持续性。"
        },
        {
          fr: "Finalement, protéger l'environnement est un défi technique mais aussi philosophique. Il s'agit de redéfinir notre rapport à la consommation et au progrès technologique. Nous devons apprendre à vivre mieux avec moins, en privilégiant la qualité sur la quantité. L'innovation technologique offre des solutions prometteuses, comme le captage du carbone, mais elles ne suffiront pas sans un changement profond de nos mentalités. Ensemble, en étant conscients, nous pouvons inverser la tendance et offrir un futur radieux.",
          ipa: "/fi.nal.mɑ̃, pʁɔ.te.ʒe lɑ̃.vi.ʁɔ.nə.mɑ̃ ɛ œ̃ de.fi tɛk.nik mɛ o.si fi.lɔ.zɔ.fik. il sa.ʒi de ʁə.de.fi.niʁ nɔ.tʁə ʁa.pɔʁ a la kɔ̃.sɔ.ma.sjɔ̃ e o pʁɔ.ɡʁɛ. nu də.vɔ̃ a.pʁɑ̃dʁ a vivʁ mjø a.vɛk mwɛ̃, ɑ̃ pʁi.vi.le.ʒjɑ̃ la ka.li.te syʁ la kɑ̃.ti.te/",
          zh: "最后，保护环境既是技术挑战，也是哲学挑战。这关系到重新定义我们与消费和进步的关系。我们必须学会用更少的资源生活得更好，优先考虑质量而非数量。技术创新提供了充满希望的解决方案，但如果没有心态的深刻转变，这些是不够的。只要我们有意识并积极参与，我们就能扭转趋势。"
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
        id: 'b1-2',
        level: 'B1',
        title: { fr: "Le Télétravail : Une Révolution Professionnelle", zh: "远程办公：一场职业革命" },
        paragraphs: [
          {
            fr: "Depuis quelques années, le télétravail est devenu une pratique courante pour des millions de salariés à travers le monde. Cette nouvelle organisation du travail permet d'exercer ses fonctions professionnelles depuis son domicile ou un espace de coworking. Les avantages sont nombreux, notamment la réduction du temps passé dans les transports et une plus grande flexibilité horaire. Cependant, cette transition exige une discipline personnelle rigoureuse et une bonne maîtrise des outils numériques de communication pour rester efficace et connecté avec son équipe.",
            ipa: "/də.pɥi kɛl.kə za.ne, lə te.le.tʁa.vaj ɛ de.və.ny yn pʁa.tik ku.ʁɑ̃t puʁ de mi.ljɔ̃ de sa.la.ʁje a tʁa.vɛʁ lə mɔ̃d. sɛt nu.vɛl ɔʁ.ɡa.ni.za.sjɔ̃ dy tʁa.vaj pɛʁ.mɛ dɛɡ.zɛʁ.se se fɔ̃k.sjɔ̃ pʁɔ.fɛ.sjɔ.nɛl də.pɥi sɔ̃ dɔ.mi.sil u œ̃ nɛs.pas de co.wor.king/",
            zh: "近年来，远程办公已成为全球数百万员工的常用做法。这种新的工作组织形式允许在家里或共享办公空间履行职业职能。其优点很多，特别是减少了在交通上花费的时间和更大的时间灵活性。然而，这一转变需要严格的个人自律和对数字通信工具的良好掌握，以保持高效并与团队保持联系。"
          },
          {
            fr: "Pour les entreprises, le télétravail représente un défi managérial majeur. Il faut apprendre à faire confiance aux employés sans avoir un contrôle physique direct sur leurs activités quotidiennes. La communication devient alors le pilier central de la collaboration. Les réunions en visioconférence et les plateformes de gestion de projets sont essentielles pour coordonner les tâches. Une entreprise qui adopte le télétravail peut également réduire ses coûts fixes liés aux bureaux physiques tout en améliorant le bien-être de ses collaborateurs engagés.",
            ipa: "/puʁ le zɑ̃.tʁə.pʁiz, lə te.le.tʁa.vaj ʁə.pʁe.zɑ̃t œ̃ de.fi ma.na.ʒe.ʁjal ma.ʒœʁ. i l fo ta.pʁɑ̃dʁ a fɛʁ kɔ̃.fjɑ̃s o zɑ̃.plwa.je sɑ̃ za.vwaʁ œ̃ kɔ̃.tʁol fi.zik di.ʁɛkt syʁ lœʁ za.kti.vi.te kɔ.ti.djɛn/",
            zh: "对于企业来说，远程办公是一项重大的管理挑战。必须学会信任员工，而无需对他们的日常活动进行直接的物理监控。沟通因此成为合作的核心支柱。视频会议和项目管理平台对于协调任务至关重要。采用远程办公的公司还可以减少与物理办公室相关的固定成本，同时提高员工的福祉。"
          },
          {
            fr: "D'un point de vue social, le télétravail peut parfois engendrer un sentiment d'isolement. L'absence de contacts informels à la machine à café ou pendant le déjeuner peut peser sur le moral de certains travailleurs. Il est donc crucial de maintenir des moments de rencontre en présentiel pour renforcer la cohésion de l'équipe et la culture d'entreprise. Trouver le bon équilibre entre travail à distance et travail au bureau est la clé d'un modèle hybride réussi qui satisfait à la fois les besoins de l'individu et de l'organisation.",
            ipa: "/dœ̃ pwɛ̃ də vy sɔ.sjal, lə te.le.tʁa.vaj pø paʁ.fwa ɑ̃.ʒɑ̃.dʁe œ̃ sɑ̃.ti.mɑ̃ di.zɔ.lə.mɑ̃. lab.sɑ̃s də kɔ̃.takt ɛ̃.fɔʁ.mɛl a la ma.ʃin a ka.fe u pɑ̃.dɑ̃ lə de.ʒœ.ne pø pə.ze syʁ lə mɔ.ʁal de sɛʁ.tɛ̃ tʁa.va.jœʁ/",
            zh: "从社会角度来看，远程办公有时会导致孤独感。在咖啡机旁或午餐期间缺乏非正式接触可能会影响某些工人的士气。因此，保持面对面的会面时刻对于加强团队凝聚力和企业文化至关重要。在远程办公和办公室工作之间找到平衡是成功的混合模式的关键。"
          },
          {
            fr: "En conclusion, le télétravail transforme durablement notre vision de la carrière professionnelle. Il offre des opportunités d'autonomie inédites et favorise un meilleur équilibre entre vie privée et vie professionnelle. Toutefois, pour que cette expérience soit bénéfique, il est nécessaire de fixer des limites claires pour éviter le surmenage. Le droit à la déconnexion est devenu un enjeu juridique important dans nos sociétés hyperconnectées. L'avenir du travail sera sans doute flexible, numérique et centré sur la confiance mutuelle.",
            ipa: "/ɑ̃ kɔ̃.kly.zjɔ̃, lə te.le.tʁa.vaj tʁɑ̃s.fɔʁm dy.ʁa.blə.mɑ̃ nɔtʁə vi.zjɔ̃ de la ka.ʁjɛʁ pʁɔ.fɛ.sjɔ.nɛl. i l ɔfʁ de zɔ.pɔʁ.ty.ni.te do.tɔ.nɔ.mi i.ne.dit e fa.vɔ.ʁiz œ̃ mɛ.jœʁ e.ki.libʁ ɑ̃.tʁə vi pʁi.ve e vi pʁɔ.fɛ.sjɔ.nɛl/",
            zh: "总之，远程办公正在持久地改变我们对职业生涯的看法。它提供了前所未有的自主机会，并促进了私人生活与职业生活之间更好的平衡。然而，为了使这种体验有益，有必要设定明确的界限以避免过度劳累。在高度互联的社会中，断开连接的权利已成为一个重要的法律问题。"
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
          ipa: "/le.sɔʁ fyl.ɡy.ʁɑ̃ de lɛ̃.tɛ.li.ʒɑ̃s aʁ.ti.fi.sjɛl sy.sit o.ʒuʁ.dɥi œ̃ me.lɑ̃ʒ dad.mi.ʁa.sjɔ̃ e dɛ̃.kje.tyd o sɛ̃ de la sɔ.sje.te. sɛt tɛk.nɔ.lɔ.ʒi ʁe.vɔ.ly.sjɔ.nɛʁ tʁɑ̃s.fɔʁm ʁa.di.kal.mɑ̃ de nɔ̃.bʁø sɛk.tœʁ dak.ti.vi.te/",
          zh: "人工智能（IA）的飞速发展如今在社会中引起了赞叹与担忧交织的情绪。这一革命性技术正在从根本上改变许多行业，从医疗、金融到制造业。虽然AI能够实现重复性任务的自动化，并以无与伦比的精度分析庞大数据集，但它也威胁到某些传统工作的存在。专家们一致认为，我们正处于劳动力市场的深刻变革中。"
        },
        {
          fr: "D'un point de vue éthique, le développement de l'intelligence artificielle soulève des questions complexes sur la responsabilité et la transparence. Qui est responsable lorsqu'un algorithme prend une décision erronée ou discriminatoire ? La protection de la vie privée est également un enjeu majeur, car les systèmes d'IA dépendent souvent d'une collecte massive d'informations personnelles. Il est donc impératif de mettre en place des cadres réglementaires stricts pour garantir que ces technologies soient utilisées au service de l'humanité et non à son détriment.",
          ipa: "/dœ̃ pwɛ̃ de vy e.tik, lə de.vlɔ.pə.mɑ̃ de lɛ̃.tɛ.li.ʒɑ̃s aʁ.ti.fi.sjɛl su.lɛv de kɛs.tjɔ̃ kɔ̃.plɛks syʁ la ʁɛs.pɔ̃.sa.bi.li.te e la tʁɑ̃s.pa.ʁɑ̃s/",
          zh: "从伦理角度看，人工智能的发展引发了关于责任和透明度的复杂问题。当算法做出错误或歧视性决定时，谁该负责？隐私保护也是一个重大挑战，因为AI系统通常依赖于大规模收集个人信息。因此，迫切需要建立严格的监管框架，以确保这些技术为人类服务，而非损害人类利益。"
        },
        {
          fr: "Pourtant, les bénéfices potentiels de l'IA sont immenses pour résoudre les défis mondiaux. Dans le domaine de la santé, elle aide les médecins à diagnostiquer des maladies avec une rapidité incroyable. En matière d'environnement, elle permet d'optimiser la gestion des ressources énergétiques et de modéliser avec précision l'évolution du climat. L'IA peut donc être un allié puissant pour construire un avenir plus durable et efficace. L'éducation devra aussi évoluer pour former les futurs citoyens à collaborer intelligemment avec ces nouveaux outils.",
          ipa: "/puʁ.tɑ̃, le be.ne.fis pɔ.tɑ̃.sjɛl de li.a sɔ̃ i.mɑ̃s puʁ ʁe.zudʁ le de.fi mɔ̃.djo. dɑ̃ lə dɔ.mɛn de la sɑ̃.te, ɛl ɛd le me.dəsɛ̃ a djaɡ.nɔs.ti.ke de ma.la.di a.vɛk yn ʁa.pi.di.te ɛ̃.kʁwa.jabl/",
          zh: "然而，AI在解决全球挑战方面的潜在效益是巨大的。在医疗领域，它帮助医生以惊人的速度诊断疾病。在环境方面，它能优化能源管理并精确模拟气候演变。因此，AI可以成为构建更可持续和高效未来的强大盟友。教育也必须进化，以培养未来公民与这些新工具智能协作的能力。"
        },
        {
          fr: "En conclusion, l'intelligence artificielle n'est ni une panacée ni une malédiction, mais un puissant instrument dont nous devons maîtriser l'usage. La clé réside dans une approche équilibrée qui favorise l'innovation tout en protégeant les droits fondamentaux des individus. Le dialogue entre les scientifiques, les politiques et la société civile est essentiel pour définir les limites de ce qui est acceptable. L'avenir de l'intelligence artificielle dépendra de notre capacité collective à orienter son évolution vers le bien commun.",
          ipa: "/ɑ̃ kɔ̃.kly.zjɔ̃, lɛ̃.tɛ.li.ʒɑ̃s aʁ.ti.fi.sjɛl nɛ ni yn pa.na.se ni yn ma.le.dik.sjɔ̃, mɛ œ̃ pɥi.sɑ̃ ɛ̃s.tʁy.mɑ̃ dɔ̃ nu də.vɔ̃ mɛ.tʁi.ze ly.zaʒ/",
          zh: "总之，人工智能既不是万灵药也不是诅咒，而是一个我们必须掌握其用途的强大工具。关键在于采取一种平衡的方法，在促进创新的同时保护个人的基本权利。科学家、政治家和民间社会之间的对话对于定义可接受的界限至关重要。人工智能的未来将取决于我们将其演变导向共同利益的集体能力。"
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
          ipa: "/lɛɡ.zis.tɑ̃.sja.lism, ku.ʁɑ̃ fi.lɔ.zɔ.fik pʁe.dɔ.mi.nɑ̃ dy vɛ̃.tjɛm sjɛkl, ʁə.poz syʁ lə pɔs.ty.la fɔ̃.da.mɑ̃.tal kə lɛɡ.zis.tɑ̃s pʁe.sɛd lɛ.sɑ̃s/",
          zh: "存在主义作为20世纪占主导地位的哲学流派，建立在“存在先于本质”这一基本前提之上。这一由让-保罗·萨特推广的激进断言意味着人类并非由预定的本性所定义，而是毫无初始理由地出现在世界上。因此，人被抛入一种绝对的自由中，这远非简单的特权，而是一种沉重的责任。根据萨特的观点，个人是其价值观和命运的唯一创造者。"
        },
        {
          fr: "Cette liberté inaliénable engendre inévitablement un sentiment d'angoisse face au vide de l'existence et à l'absurdité du monde. Pour l'existentialiste, ne pas choisir est encore un choix, et chacun est responsable de l'image de l'homme qu'il projette à travers ses actes. Cette philosophie refuse tout déterminisme, qu'il soit biologique, social ou théologique. Elle invite l'individu à l'authenticité, c'est-à-dire à assumer pleinement ses choix sans se réfugier derrière des excuses ou des conventions morales préétablies par la société.",
          ipa: "/sɛt li.bɛʁ.te i.na.lje.nabl ɑ̃.ʒɑ̃dʁ i.ne.vi.ta.blə.mɑ̃ œ̃ sɑ̃.ti.mɑ̃ dɑ̃.ɡwas fa.s o vid de lɛɡ.zis.tɑ̃s e a lab.syʁ.di.te dy mɔ̃d/",
          zh: "这种不可剥夺的自由不可避免地会在面对存在的空虚和世界的荒谬时产生一种焦虑感。对于存在主义者来说，不选择也是一种选择，每个人都对自己通过行为投射出的人类形象负有责任。这种哲学拒绝一切决定论，无论是生物的、社会的还是神学的。它邀请个人追求真实性，即充分承担自己的选择，而不躲在借口或社会预设的道德习俗之后。"
        },
        {
          fr: "Critiqué par certains pour son pessimisme apparent, l'existentialisme se veut pourtant une doctrine de l'action et de l'optimisme tragique. Si le monde n'a pas de sens intrinsèque, c'est à l'homme de lui en donner un par son engagement dans la cité. La solidarité humaine naît de cette condition commune : nous sommes tous « condamnés à être libres ». L'œuvre littéraire de Sartre, comme ses pièces de théâtre, illustre ces dilemmes moraux où les personnages doivent naviguer entre leur désir de liberté et les contraintes de la situation historique.",
          ipa: "/kʁi.ti.ke paʁ sɛʁ.tɛ̃ puʁ sɔ̃ pe.si.mism a.pa.ʁɑ̃, lɛɡ.zis.tɑ̃.sja.lism sə vø puʁ.tɑ̃ yn dɔk.tʁin de lak.sjɔ̃ e de lɔp.ti.mism tʁa.ʒik/",
          zh: "尽管有些人因其表面的悲观主义而批评它，但存在主义却自视为一种行动和悲剧乐观主义的学说。如果世界没有内在意义，那么人必须通过在社会中的参与赋予其意义。人类的团结源于这种共同处境：我们都被“判处自由”。萨特的文学作品，如他的戏剧，展示了这些道德困境，人物必须在追求自由的欲望和历史情境的约束之间航行。"
        },
        {
          fr: "En conclusion, l'existentialisme demeure une pensée d'une actualité brûlante dans un monde en quête de repères. Il nous rappelle que notre essence n'est jamais figée et que nous avons le pouvoir permanent de nous réinventer. Face aux défis contemporains, cette philosophie nous exhorte à ne pas être de simples spectateurs de notre vie, mais à en devenir les acteurs conscients et engagés. La dignité humaine réside précisément dans cette capacité à dire « non » à la fatalité et à sculpter son propre chemin dans l'incertitude.",
          ipa: "/ɑ̃ kɔ̃.kly.zjɔ̃, lɛɡ.zis.tɑ̃.sja.lism də.mœʁ yn pɑ̃.se dyn ak.tɥa.li.te bʁy.lɑ̃t dɑ̃z œ̃ mɔ̃d ɑ̃ kɛt de ʁə.pɛʁ/",
          zh: "总之，在一个寻找坐标的世界中，存在主义仍然是一种具有强烈现实意义的思想。它提醒我们，我们的本质绝非固定不变，我们拥有不断重塑自我的力量。面对当代挑战，这种哲学敦促我们不要仅仅做生活的旁观者，而要成为有意识且投入的主角。人类的尊严恰恰在于这种拒绝宿命并在不确定中雕刻自己道路的能力。"
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