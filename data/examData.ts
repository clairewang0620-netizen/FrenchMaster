
import { ProficiencyLevel, ExamQuestion } from '../types';

export const STATIC_EXAM_DATA: Record<ProficiencyLevel, ExamQuestion[]> = {
  A1: [
    { 
      id: "A1_Q1", 
      type: "multiple_choice", 
      question: "Comment dit-on 'hello' en français ?", 
      question_cn_hint: "法语中‘hello’怎么说？",
      options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"], 
      answer: "Bonjour", 
      detailedExplanation: {
        analysis: "‘Bonjour’ 是法语中最基础的问候语，结合了 'bon' (好) 和 'jour' (日子)。",
        grammarPoint: "问候语 (Les Salutations)：白天使用 Bonjour，日落后通常改用 Bonsoir。",
        example: { fr: "Bonjour, comment ça va ?", zh: "你好，最近怎么样？" }
      }
    },
    { 
      id: "A1_Q2", 
      type: "fill_in_blank", 
      question: "Je ___ un livre.", 
      question_cn_hint: "我在读一本书。",
      answer: "lis", 
      detailedExplanation: {
        analysis: "动词 'lire' (读) 是不规则动词，其直陈式现在时第一人称单数变位为 'lis'。",
        grammarPoint: "动词变位：Lire (je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent)。",
        example: { fr: "Je lis une bande dessinée.", zh: "我在读一本漫画。" }
      }
    },
    { 
      id: "A1_Q3", 
      type: "multiple_choice", 
      question: "Quelle est la couleur du ciel ?", 
      question_cn_hint: "天空是什么颜色的？",
      options: ["Rouge", "Bleu", "Vert", "Noir"], 
      answer: "Bleu", 
      detailedExplanation: {
        analysis: "‘Bleu’ 是蓝色的意思，用来形容晴朗的天空。",
        grammarPoint: "颜色形容词：通常放在名词后面，且需要与名词的性数保持一致 (ciel 是阳性单数)。",
        example: { fr: "Le ciel est bleu aujourd'hui.", zh: "今天天空很蓝。" }
      }
    },
    { 
      id: "A1_Q4", 
      type: "listening", 
      question: "Écoutez et choisissez la bonne réponse :", 
      question_cn_hint: "听录音并选择正确的单词：",
      options: ["Merci", "Bonjour", "Au revoir", "S'il vous plaît"], 
      answer: "Merci", 
      audio: "Merci",
      detailedExplanation: {
        analysis: "听到的是 'Merci'，意为‘谢谢’。",
        grammarPoint: "礼貌用语：Merci 是表达谢意的最通用方式。",
        example: { fr: "Merci pour le cadeau !", zh: "谢谢你的礼物！" }
      }
    },
    { 
      id: "A1_Q5", 
      type: "multiple_choice", 
      question: "Quel jour sommes-nous ?", 
      question_cn_hint: "今天是星期几？",
      options: ["Lundi", "Chien", "Rouge", "Maison"], 
      answer: "Lundi", 
      detailedExplanation: {
        analysis: "只有 'Lundi' (星期一) 是表示星期的词汇，其余分别为狗、红色、房子。",
        grammarPoint: "星期词汇：lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche。",
        example: { fr: "Nous sommes lundi.", zh: "今天是星期一。" }
      }
    },
    { id: "A1_Q6", type: "fill_in_blank", question: "Il ___ un chat.", question_cn_hint: "他有一只猫。", answer: "a", detailedExplanation: { analysis: "‘avoir’ (有) 的第三人称单数变位是 'a'。", grammarPoint: "动词 Avoir 的变位：J'ai, tu as, il a...", example: { fr: "Il a beaucoup d'amis.", zh: "他有很多朋友。" } } },
    { id: "A1_Q7", type: "multiple_choice", question: "Comment dit-on 'thank you' en français ?", question_cn_hint: "法语中‘谢谢’怎么说？", options: ["Merci", "Bonjour", "Au revoir", "S'il vous plaît"], answer: "Merci", detailedExplanation: { analysis: "‘Merci’ 对应英文的 'thank you'。", grammarPoint: "基础词汇：Merci 是学习法语最先掌握的词汇之一。", example: { fr: "Merci bien.", zh: "非常感谢。" } } },
    { id: "A1_Q8", type: "listening", question: "Écoutez et choisissez :", question_cn_hint: "听音并选择对应的词：", options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"], answer: "Au revoir", audio: "Au revoir", detailedExplanation: { analysis: "听到的是 'Au revoir'，意为‘再见’。", grammarPoint: "离别用语：Au revoir 是正式的再见表达方式。", example: { fr: "Au revoir et à bientôt.", zh: "再见，回头见。" } } },
    { id: "A1_Q9", type: "multiple_choice", question: "Quel est le numéro après 2 ?", question_cn_hint: "2之后的数字是多少？", options: ["1", "3", "4", "5"], answer: "3", detailedExplanation: { analysis: "数字 3 在法语中是 'trois'。", grammarPoint: "数词：un, deux, trois, quatre, cinq...", example: { fr: "J'ai trois pommes.", zh: "我有三个苹果。" } } },
    { id: "A1_Q10", type: "fill_in_blank", question: "Nous ___ contents.", question_cn_hint: "我们很开心。", answer: "sommes", detailedExplanation: { analysis: "‘être’ (是) 在 'nous' 后的变位是 'sommes'。", grammarPoint: "动词 Être 的变位：Je suis, tu es, il est, nous sommes...", example: { fr: "Nous sommes en France.", zh: "我们在法国。" } } }
  ],
  A2: [
    { 
      id: "A2_Q1", 
      type: "multiple_choice", 
      question: "Comment s'appelle la capitale de la France ?", 
      question_cn_hint: "法国的首都是什么？",
      options: ["Lyon", "Marseille", "Paris", "Nice"], 
      answer: "Paris", 
      detailedExplanation: {
        analysis: "巴黎 (Paris) 是法国政治、文化和经济的中心。",
        grammarPoint: "专有名词用法：城市名前通常不加冠词，如 à Paris, de Paris。",
        example: { fr: "Paris est magnifique.", zh: "巴黎非常壮美。" }
      }
    },
    { 
      id: "A2_Q2", 
      type: "fill_in_blank", 
      question: "Je ___ au marché chaque samedi.", 
      question_cn_hint: "我每个周六都去市场。",
      answer: "vais", 
      detailedExplanation: {
        analysis: "‘aller’ (去) 在第一人称单数 (Je) 下的现在时变位是 'vais'。",
        grammarPoint: "Aller 的不规则变位：Je vais, tu vas, il va, nous allons...",
        example: { fr: "Je vais à la piscine.", zh: "我去游泳池。" }
      }
    },
    { id: "A2_Q3", type: "multiple_choice", question: "Quel est le féminin de 'petit' ?", question_cn_hint: "‘petit’的阴性形式是什么？", options: ["Petite", "Petit", "Petits", "Petites"], answer: "Petite", detailedExplanation: { analysis: "法语形容词阴性通常在阳性形式后加 'e'。", grammarPoint: "形容词性数配合：petit (阳) -> petite (阴)。", example: { fr: "Une petite fille.", zh: "一个小女孩。" } } },
    { id: "A2_Q4", type: "listening", question: "Écoutez. Quelle phrase entendez-vous ?", question_cn_hint: "听录音。你听到了哪句话？", options: ["Je suis fatigué", "Je suis content", "Je suis heureux", "Je suis triste"], answer: "Je suis fatigué", audio: "Je suis fatigué", detailedExplanation: { analysis: "听到的是 'fatigué' (疲累)。", grammarPoint: "常用形容词：表示身体状态。", example: { fr: "Il est fatigué après le travail.", zh: "他工作后很累。" } } },
    { id: "A2_Q5", type: "multiple_choice", question: "Choisissez la bonne traduction : 'I eat an apple'", question_cn_hint: "选择正确的翻译：‘我吃一个苹果’", options: ["Je mange une pomme", "Je bois une pomme", "Je vois une pomme", "Je prends une pomme"], answer: "Je mange une pomme", detailedExplanation: { analysis: "‘mange’ (吃) 对应英文 'eat'。", grammarPoint: "第一组动词变位：以 -er 结尾的动词 manger。", example: { fr: "L'enfant mange une pomme.", zh: "孩子在吃苹果。" } } },
    { id: "A2_Q6", type: "fill_in_blank", question: "Nous ___ en vacances l'été dernier.", question_cn_hint: "我们去年夏天去度假了。", answer: "étions", detailedExplanation: { analysis: "描述过去的持续状态或习惯，使用未完成过去时 (Imparfait)。", grammarPoint: "未完成过去时：Être 的变位 j'étais, tu étais, il était, nous étions...", example: { fr: "Quand j'étais petit...", zh: "当我小时候..." } } },
    { id: "A2_Q7", type: "multiple_choice", question: "Quel mot complète la phrase : 'Il fait ___ aujourd'hui.'", question_cn_hint: "哪个词可以补充句子：‘今天天气很___。’", options: ["beau", "bon", "chaud", "froid"], answer: "beau", detailedExplanation: { analysis: "描述天气晴朗常用 'Il fait beau'。", grammarPoint: "无人称结构：Il fait + 形容词用于天气描述。", example: { fr: "Il fait beau à Nice.", zh: "尼斯天气很好。" } } },
    { id: "A2_Q8", type: "listening", question: "Écoutez. Quelle est la bonne réponse ?", question_cn_hint: "听录音。正确答案是哪个？", options: ["Je vais à l'école", "Je vais au marché", "Je vais à la maison", "Je vais au travail"], answer: "Je vais à l'école", audio: "Je vais à l'école", detailedExplanation: { analysis: "录音中清晰读出 'école' (学校)。", grammarPoint: "地点名词：école 是以元音开头的阴性名词，用 l'école。", example: { fr: "Les enfants sont à l'école.", zh: "孩子们在学校。" } } },
    { id: "A2_Q9", type: "multiple_choice", question: "Quel est le contraire de 'grand' ?", question_cn_hint: "‘grand’的反义词是什么？", options: ["Petit", "Moyen", "Long", "Haut"], answer: "Petit", detailedExplanation: { analysis: "‘grand’ (大/高) 的对应反义词是 'petit' (小/矮)。", grammarPoint: "反义词积累：法语学习中的基础对比。", example: { fr: "Un grand chien et un petit chat.", zh: "一只大狗和一只小猫。" } } },
    { id: "A2_Q10", type: "fill_in_blank", question: "Elles ___ des vêtements neufs.", question_cn_hint: "她们买了一些新衣服。", answer: "achètent", detailedExplanation: { analysis: "动词 'acheter' (买) 在第三人称复数 (Elles) 下的现在时变位。", grammarPoint: "动词 acheter 的拼写变化：在单数人称和第三人称复数中，'e' 变为 'è'。", example: { fr: "Ils achètent une voiture.", zh: "他们买了一辆车。" } } }
  ],
  B1: [
    { 
      id: "B1_Q1", 
      type: "multiple_choice", 
      question: "Complétez : 'Si j'avais de l'argent, je ___ en vacances.'", 
      question_cn_hint: "补全句子：‘如果我有钱，我就去度假。’", 
      options: ["partirais", "pars", "allais", "parti"], 
      answer: "partirais",
      detailedExplanation: {
        analysis: "这是一个对现在的假设。Si + Imparfait (avais) -> Conditionnel Présent (partirais)。",
        grammarPoint: "条件式现在时：表达假设、愿望或礼貌建议。Partir 的词根是 partir-，词尾是 -ais。",
        example: { fr: "Si je pouvais, je le ferais.", zh: "如果我能做，我就做了。" }
      }
    },
    { 
      id: "B1_Q2", 
      type: "fill_in_blank", 
      question: "Il est important que vous ___ à l'heure.", 
      question_cn_hint: "你们准时到达很重要。", 
      answer: "soyez",
      detailedExplanation: {
        analysis: "无人称结构 'Il est important que' 引导从句，必须使用虚拟式。",
        grammarPoint: "虚拟式 (Subjonctif)：Être 在 vous 形式下的虚拟式变位是 soyez。",
        example: { fr: "Il faut que vous soyez prêts.", zh: "你们必须准备好。" }
      }
    },
    { id: "B1_Q3", type: "multiple_choice", question: "Quel temps verbal est utilisé dans : 'Je mangerai demain' ?", question_cn_hint: "这句话用了什么时态？", options: ["Futur simple", "Présent", "Passé composé", "Imparfait"], answer: "Futur simple", detailedExplanation: { analysis: "‘mangerai’ 是动词 manger 的简单将来时变位。", grammarPoint: "简单将来时：动词原形 + -ai, -as, -a, -ons, -ez, -ont。", example: { fr: "Je viendrai demain.", zh: "我明天来。" } } },
    { id: "B1_Q4", type: "listening", question: "Écoutez. Quelle est la phrase entendue ?", question_cn_hint: "听录音。听到的是哪句话？", options: ["Je n'ai jamais vu ça", "Je n'ai pas vu ça", "Je l'ai vu", "Je ne vois jamais ça"], answer: "Je n'ai jamais vu ça", audio: "Je n'ai jamais vu ça", detailedExplanation: { analysis: "关键词 'jamais' (从不) 和复合过去时搭配。", grammarPoint: "否定词 jamais 的位置：置于助动词和过去分词之间。", example: { fr: "Je n'ai jamais mangé de caviar.", zh: "我从未吃过鱼子酱。" } } },
    { id: "B1_Q5", type: "multiple_choice", question: "Complétez : 'Il faut que tu ___ ton travail.'", question_cn_hint: "补全句子：‘你必须完成你的工作。’", options: ["finisses", "finis", "finira", "finit"], answer: "finisses", detailedExplanation: { analysis: "‘Il faut que’ 要求接虚拟式。Finir 的虚拟式 tu 变位是 finisses。", grammarPoint: "虚拟式变位：以 ils 的变位词根 (finiss-) 为基础加词尾。", example: { fr: "Il faut que tu finisses ton assiette.", zh: "你必须把盘子里的东西吃完。" } } },
    { id: "B1_Q6", type: "fill_in_blank", question: "Je ne sais pas s'il ___ venir ce soir.", question_cn_hint: "我不知道他今晚是否会来。", answer: "va", detailedExplanation: { analysis: "Si 引导的间接疑问句不接虚拟式，这里表达未来的可能性，通常用直陈式现在时（近未来）。", grammarPoint: "Si 的引导作用：条件从句 vs 间接疑问句。", example: { fr: "Dis-moi s'il va pleuvoir.", zh: "告诉我是否要下雨。" } } },
    { id: "B1_Q7", type: "multiple_choice", question: "Quel mot complète la phrase : 'Bien que ___ fatigué, il travaille.'", question_cn_hint: "补全句子：‘尽管他累了，他仍在工作。’", options: ["soit", "est", "étais", "sera"], answer: "soit", detailedExplanation: { analysis: "‘Bien que’ (尽管) 引导让步从句，必须接虚拟式。", grammarPoint: "虚拟式触发词：bien que, quoique, pour que...", example: { fr: "Bien qu'il soit riche, il est simple.", zh: "尽管他富有，他很朴素。" } } },
    { id: "B1_Q8", type: "listening", question: "Écoutez : 'Je voudrais réserver une chambre'.", question_cn_hint: "听录音并选择正确的选项：", options: ["Je voudrais réserver une chambre", "Je voudrais acheter une chambre", "Je voudrais visiter une chambre", "Je voudrais louer une voiture"], answer: "Je voudrais réserver une chambre", audio: "Je voudrais réserver une chambre", detailedExplanation: { analysis: "录音意为‘我想预订一个房间’。", grammarPoint: "旅游常用语：réserver (预订) + une chambre (房间)。", example: { fr: "Je voudrais réserver une table.", zh: "我想订个位子。" } } },
    { id: "B1_Q9", type: "multiple_choice", question: "Choisissez la bonne traduction : 'She has been studying for two hours.'", question_cn_hint: "选择正确的翻译：‘她已经学习了两个小时了。’", options: ["Elle étudie depuis deux heures", "Elle étudiait depuis deux heures", "Elle a étudié deux heures", "Elle étudiera deux heures"], answer: "Elle étudie depuis deux heures", detailedExplanation: { analysis: "动作从过去开始持续到目前，法语用直陈式现在时 + depuis。", grammarPoint: "Depuis 的用法：强调动作仍在继续。", example: { fr: "J'habite ici depuis 10 ans.", zh: "我住在这里十年了。" } } },
    { id: "B1_Q10", type: "fill_in_blank", question: "Si j'avais su, je ___ venu plus tôt.", question_cn_hint: "如果我早知道，我就会早点来。", answer: "serais", detailedExplanation: { analysis: "对过去的假设和遗憾。Si + Plus-que-parfait -> Conditionnel Passé。'Venir' 的助动词是 être。", grammarPoint: "条件式过去时构成：avoir/être 的条件式现在时 + 过去分词。", example: { fr: "J'aurais dû te dire.", zh: "我本该告诉你的。" } } }
  ],
  B2: [
    { 
      id: "B2_Q1", 
      type: "multiple_choice", 
      question: "Complétez : 'Bien que nous ___ fatigués, nous continuons.'", 
      question_cn_hint: "补全句子：‘尽管我们很累，我们仍继续。’", 
      options: ["soyons", "sommes", "étions", "serons"], 
      answer: "soyons",
      detailedExplanation: {
        analysis: "‘Bien que’ 始终引导虚拟式从句。",
        grammarPoint: "虚拟式 (Subjonctif)：Être 在 nous 形式下为 soyons。",
        example: { fr: "Bien que nous soyons en hiver, il fait doux.", zh: "尽管我们在冬天，天气很暖和。" }
      }
    },
    { 
      id: "B2_Q2", 
      type: "fill_in_blank", 
      question: "Il est nécessaire que tu ___ ce rapport demain.", 
      question_cn_hint: "你有必要在明天写好这份报告。", 
      answer: "rédiges",
      detailedExplanation: {
        analysis: "无人称句型触发虚拟式。Rédiger 在虚拟式 tu 下的形式是 rédiges。",
        grammarPoint: "词根变化：虚拟式通常基于 ils/elles 变位词根。",
        example: { fr: "Il faut que tu rédiges ton CV.", zh: "你必须写好你的简历。" }
      }
    },
    { id: "B2_Q3", type: "multiple_choice", question: "Quel mot complète la phrase : 'Si j'avais su, je ___ pas venu.'", question_cn_hint: "补全句子：‘如果我早知道，我就不来了。’", options: ["ne serais", "ne serai", "n'étais", "n'ai"], answer: "ne serais", detailedExplanation: { analysis: "这是对过去事实的假设。Si + 过去完成时 -> 条件式过去时。", grammarPoint: "否定形式的条件式过去时：ne + 助动词 + pas + 分词。", example: { fr: "Sans toi, je ne serais pas là.", zh: "没有你，我不会在这。" } } },
    { id: "B2_Q4", type: "listening", question: "Écoutez. Quelle phrase entendez-vous ?", question_cn_hint: "听录音。你听到了哪句话？", options: ["Je ne peux pas accepter cela", "Je peux accepter cela", "Je ne sais pas accepter cela", "Je ne veux pas accepter cela"], answer: "Je ne peux pas accepter cela", audio: "Je ne peux pas accepter cela", detailedExplanation: { analysis: "录音表达了‘我不能接受这个’。", grammarPoint: "Pouvoir 的否定表达。", example: { fr: "Je ne peux pas t'aider.", zh: "我帮不了你。" } } },
    { id: "B2_Q5", type: "multiple_choice", question: "Choisissez la traduction correcte : 'Despite the rain, we went out.'", question_cn_hint: "选择正确的翻译：‘尽管下雨，我们还是出去了。’", options: ["Malgré la pluie, nous sommes sortis", "Parce qu'il pleuvait, nous sommes sortis", "S'il pleut, nous sortons", "Bien que la pluie, nous restons"], answer: "Malgré la pluie, nous sommes sortis", detailedExplanation: { analysis: "‘Malgré’ 后面直接跟名词，表达‘尽管’。", grammarPoint: "介词 malgré 的用法：对比 bien que (接从句)。", example: { fr: "Malgré ses efforts, il a échoué.", zh: "尽管他努力了，他还是失败了。" } } },
    { id: "B2_Q6", type: "fill_in_blank", question: "Il aurait fallu que vous ___ plus attentifs.", question_cn_hint: "你们本该更专注一些。", answer: "soyez", detailedExplanation: { analysis: "‘Il aurait fallu que’ 是过去虚拟式的触发结构。", grammarPoint: "虚拟式的呼应：主句是过去时，从句仍常用虚拟式现在时（现代法语中）。", example: { fr: "Il aurait fallu que tu viennes.", zh: "你本该来的。" } } },
    { id: "B2_Q7", type: "multiple_choice", question: "Complétez : 'Je doute qu'il ___ comprendre le problème.'", question_cn_hint: "补全句子：‘我怀疑他是否能理解这个问题。’", options: ["puisse", "peut", "pouvait", "pourra"], answer: "puisse", detailedExplanation: { analysis: "动词 'douter que' (怀疑) 表达主观不确定，必须接虚拟式。", grammarPoint: "动词 pouvoir 的虚拟式变位：puisse, puisses, puisse...", example: { fr: "Je doute qu'il pleuve.", zh: "我怀疑会下雨。" } } },
    { id: "B2_Q8", type: "listening", question: "Écoutez. Quelle est la bonne réponse ?", question_cn_hint: "听录音。正确答案是哪个？", options: ["Pouvez-vous m'aider ?", "Je peux vous aider", "Je vais vous aider", "Vous pouvez aider ?"], answer: "Pouvez-vous m'aider ?", audio: "Pouvez-vous m'aider ?", detailedExplanation: { analysis: "这是一个礼貌的请求。‘您能帮我吗？’", grammarPoint: "疑问句结构：主谓倒装法。", example: { fr: "Pouvez-vous répéter ?", zh: "您能重复一下吗？" } } },
    { id: "B2_Q9", type: "multiple_choice", question: "Complétez la phrase : 'Il est important que nous ___ prêts.'", question_cn_hint: "补全句子：‘我们准备好很重要。’", options: ["soyons", "sommes", "étions", "serons"], answer: "soyons", detailedExplanation: { analysis: "无人称结构再次考查虚拟式。", grammarPoint: "虚拟式：常用在表达重要性、必要性的从句中。", example: { fr: "Il est temps que nous partions.", zh: "该是我们出发的时候了。" } } },
    { id: "B2_Q10", type: "fill_in_blank", question: "Si j'avais plus de temps, je ___ voyager plus souvent.", question_cn_hint: "如果我有更多时间，我会更常旅行。", answer: "pourrais", detailedExplanation: { analysis: "对目前的假设。Si + Imparfait -> Conditionnel Présent。", grammarPoint: "动词 pouvoir 的条件式变位词根是 pourr-。", example: { fr: "Je pourrais venir demain.", zh: "我明天可以来。" } } }
  ],
  C1: [
    {
      id: "C1_Q1",
      type: "multiple_choice",
      question: "Choisissez la bonne phrase : 'Bien que je ___ fatigué, je continue à travailler.'",
      question_cn_hint: "选择正确的句子：‘尽管我累，我仍继续工作。’",
      options: ["sois", "suis", "étais", "serai"],
      answer: "sois",
      detailedExplanation: {
        analysis: "连词 'bien que' 后面必须接虚拟式 (subjonctif)。",
        grammarPoint: "虚拟式现在时 (Subjonctif Présent)：用于表达主观性、让步或可能性。'Être' 的虚拟式变位为：que je sois, que tu sois, qu'il soit...",
        example: { fr: "Bien qu'il fasse froid, elle sort sans manteau.", zh: "尽管天气冷，她还是没穿外套出去了。" }
      }
    },
    {
      id: "C1_Q2",
      type: "fill_in_blank",
      question: "Il est nécessaire que nous ___ attentifs pendant la réunion.",
      question_cn_hint: "我们在会议中必须保持专注。",
      answer: "soyons",
      detailedExplanation: {
        analysis: "无人称结构 'Il est nécessaire que' 要求从句动词使用虚拟式。",
        grammarPoint: "从句时态配合：主句表达必要性、愿望或命令时，从句通常使用虚拟式。'Être' 在第一人称复数 (Nous) 下的虚拟式是 'soyons'。",
        example: { fr: "Il est nécessaire que vous finissiez ce travail.", zh: "你们有必要完成这项工作。" }
      }
    },
    {
      id: "C1_Q3",
      type: "multiple_choice",
      question: "Complétez : 'Si j'avais su, je ___ venu plus tôt.'",
      question_cn_hint: "如果我早知道，我会更早来。",
      options: ["serais", "étais", "suis", "aurais"],
      answer: "serais",
      detailedExplanation: {
        analysis: "表达对过去事实的假设且带有遗憾语气时，使用条件式过去时 (Conditionnel Passé)。",
        grammarPoint: "Si引导的条件句：Si + Plus-que-parfait (过去完成时) -> Conditionnel Passé (条件式过去时)。'Venir' 的助动词是 être。",
        example: { fr: "Si nous avions eu plus de temps, nous serions restés.", zh: "如果我们有更多时间，我们就留下来了。" }
      }
    },
    {
      id: "C1_Q4",
      type: "listening",
      question: "Écoutez et choisissez la bonne réponse :",
      question_cn_hint: "听音并选择正确的句子：",
      options: ["Je regrette de ne pas avoir assisté à la réunion", "Je suis allé à la réunion", "Je n'ai pas compris la réunion", "Je suis absent à la réunion"],
      answer: "Je regrette de ne pas avoir assisté à la réunion",
      audio: "Je regrette de ne pas avoir assisté à la réunion",
      detailedExplanation: {
        analysis: "录音表达了一种遗憾之情，使用了不定式过去时 (Infinitif Passé)。",
        grammarPoint: "遗憾的表达：Regretter de + Infinitif Passé。表示对过去没做某事的遗憾。",
        example: { fr: "Il regrette d'être parti si tôt.", zh: "他遗憾自己走得那么早。" }
      }
    },
    {
      id: "C1_Q5",
      type: "multiple_choice",
      question: "Choisissez la traduction correcte : 'He would have finished the project if he had more time.'",
      question_cn_hint: "选择正确翻译：‘如果他有更多时间，他会完成这个项目。’",
      options: ["Il aurait terminé le projet s'il avait plus de temps", "Il terminera le projet", "Il finit le projet", "Il a terminé le projet"],
      answer: "Il aurait terminé le projet s'il avait plus de temps",
      detailedExplanation: {
        analysis: "英文原文是过去事实的假设，法语对应 Conditionnel Passé 和 Plus-que-parfait。",
        grammarPoint: "假设法 (L'hypothèse)：Si + Imparfait (表现在假设) / Si + Plus-que-parfait (表过去假设)。",
        example: { fr: "J'aurais aimé te voir.", zh: "我本想见你的。" }
      }
    },
    {
      id: "C1_Q6",
      type: "fill_in_blank",
      question: "Bien que tu ___ occupé, tu devrais répondre à ses messages.",
      question_cn_hint: "虽然你很忙，你仍应回复他的消息。",
      answer: "sois",
      detailedExplanation: {
        analysis: "再度考查 'bien que' 引导虚拟式的用法。",
        grammarPoint: "虚拟式 (Subjonctif)：Tu 形式下 être 的变位是 sois。",
        example: { fr: "Bien que tu sois mon ami, je ne peux pas t'aider.", zh: "尽管你是我的朋友，我也帮不了你。" }
      }
    },
    {
      id: "C1_Q7",
      type: "multiple_choice",
      question: "Quel mot complète la phrase : 'Je doute qu'il ___ comprendre les instructions.'",
      question_cn_hint: "哪个词完成句子：‘我怀疑他能理解这些指示。’",
      options: ["puisse", "peut", "pouvait", "pourra"],
      answer: "puisse",
      detailedExplanation: {
        analysis: "动词 'douter que' 表达怀疑，其从句必须使用虚拟式。",
        grammarPoint: "主观动词用法：表示怀疑、不确定时接虚拟式。'Pouvoir' 的虚拟式变位为 puisse, puisses, puisse...",
        example: { fr: "Je doute qu'elle vienne.", zh: "我怀疑她是否会来。" }
      }
    },
    {
      id: "C1_Q8",
      type: "fill_in_blank",
      question: "Si vous aviez étudié davantage, vous ___ réussi l'examen.",
      question_cn_hint: "如果你学得更多，你会通过考试。",
      answer: "auriez",
      detailedExplanation: {
        analysis: "考查条件式过去时的助动词变位。'Réussir' 使用 'avoir' 作为助动词。",
        grammarPoint: "Si + Plus-que-parfait -> Conditionnel Passé。Vous 形式下 'avoir' 的条件式现在时是 'auriez'。",
        example: { fr: "Vous auriez pu nous prévenir.", zh: "你们本可以通知我们的。" }
      }
    },
    {
      id: "C1_Q9",
      type: "multiple_choice",
      question: "Complétez : 'Il est essentiel que nous ___ les informations correctes.'",
      question_cn_hint: "句子补充：‘我们必须掌握正确的信息。’",
      options: ["ayons", "avons", "avions", "aurons"],
      answer: "ayons",
      detailedExplanation: {
        analysis: "无人称结构 'Il est essentiel que' 触发虚拟式。'Avoir' 的虚拟式第一人称复数是 'ayons'。",
        grammarPoint: "Avoir 的虚拟式变位：que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient。",
        example: { fr: "Il est essentiel que nous ayons un plan.", zh: "我们必须有一个计划，这很重要。" }
      }
    },
    {
      id: "C1_Q10",
      type: "fill_in_blank",
      question: "Quoi qu'il ___, il doit respecter les règles.",
      question_cn_hint: "无论他做什么，都必须遵守规则。",
      answer: "fasse",
      detailedExplanation: {
        analysis: "'Quoi que' (无论什么) 引导的让步从句必须接虚拟式。",
        grammarPoint: "让步连词 (Conjonctions de concession)：Quoi que, qui que, où que 等均接虚拟式. 'Faire' 的虚拟式是 fasse。",
        example: { fr: "Quoi que tu dises, je ne te croirai pas.", zh: "无论你说什么，我都不会相信你。" }
      }
    }
  ]
};
