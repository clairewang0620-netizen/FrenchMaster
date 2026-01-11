import { GrammarPoint, ProficiencyLevel } from '../types';

export const STATIC_GRAMMAR: Record<ProficiencyLevel, GrammarPoint[]> = {
  A1: [
    {
      id: 'a1-1',
      level: 'A1',
      title: '1. 动词 Être (是)',
      explanation: 'The verb "être" is used to express identity, profession, state, or characteristics.',
      explanationZh: '1. 核心规则\n\nÊtre 用于：\n- 表示身份 / 职业\n- 表示状态\n- 描述特征\n\n2. 变位表\n\n| 主语 | 变位 | 中文 |\n| :--- | :--- | :--- |\n| je | **suis** | 我是 |\n| tu | **es** | 你是 |\n| il / elle | **est** | 他/她是 |\n| nous | **sommes** | 我们是 |\n| vous | **êtes** | 你们是 |\n| ils / elles | **sont** | 他们/它们是 |',
      examples: [
        { sentence: 'Je suis étudiante.', ipa: '/ʒə sɥi e.ty.djɑ̃t/', translation: '我是学生。' },
        { sentence: 'Nous sommes fatigués.', ipa: '/nu sɔm fa.ti.ɡe/', translation: '我们很累。' }
      ]
    },
    {
      id: 'a1-2',
      level: 'A1',
      title: '2. 动词 Avoir (有)',
      explanation: 'The verb "avoir" is used to express possession, age, or physical/mental states.',
      explanationZh: '1. 核心规则\n\nAvoir 用于：\n- 表示拥有\n- 表示年龄\n- 表示身体 / 心理状态\n\n2. 变位表\n\n| 主语 | 变位 | 中文 |\n| :--- | :--- | :--- |\n| j\' | **ai** | 我有 |\n| tu | **as** | 你有 |\n| il / elle | **a** | 他/她有 |\n| nous | **avons** | 我们有 |\n| vous | **avez** | 你们有 |\n| ils / elles | **ont** | 他们/它们有 |',
      examples: [
        { sentence: 'J’ai vingt ans.', ipa: '/ʒe vɛ̃t ɑ̃/', translation: '我二十岁。' },
        { sentence: 'Elle a peur.', ipa: '/ɛl a pœʁ/', translation: '她害怕。' }
      ]
    },
    {
      id: 'a1-3',
      level: 'A1',
      title: '3. 否定结构 ne … pas',
      explanation: 'Basic negation structure in French.',
      explanationZh: '1. 核心规则\n\n用于否定动词，结构固定。\n\n2. 结构公式\n\n主语 + **ne** + 变位动词 + **pas**\n\n3. 注意事项\n\n元音开头动词 ne 变为 **n’**',
      examples: [
        { sentence: 'Je ne suis pas prêt.', ipa: '/ʒə nə sɥi pa pʁɛ/', translation: '我还没准备好。' },
        { sentence: 'Il n’a pas de temps.', ipa: '/il na pa de tɑ̃/', translation: '他没有时间。' }
      ]
    },
    {
      id: 'a1-4',
      level: 'A1',
      title: '4. 主有形容词 (Possessive Adjectives)',
      explanation: 'Possessive adjectives indicate belonging and change according to the owner and the object.',
      explanationZh: '1. 核心规则\n\n主有形容词表示所属关系（“我的 / 你的 / 他的”等）。\n\n主有形容词的形式由“所有物的性 + 数”决定，而不是人的性别。\n\n2. 形式结构表\n\n| 所有者 | 阳性单数 | 阴性单数 | 复数 |\n| :--- | :--- | :--- | :--- |\n| 我 | **mon** | **ma** | **mes** |\n| 你 | **ton** | **ta** | **tes** |\n| 他 / 她 | **son** | **sa** | **ses** |\n\n3. 特殊规则\n\n当阴性单数名词以 **元音** 或 **哑音 h** 开头时：\n\n必须使用 **mon / ton / son**，而不是 ma / ta / sa。\n\n示例：\n\n**mon amie**（我的女性朋友）\n\n**ton école**（你的学校）\n\n4. 例句展示\n\n**Mon père** travaille.（我的父亲在工作）\n\n**Ma mère** cuisine.（我的母亲在做饭）\n\n**Mes parents** sont gentils.（我的父母很和蔼）\n\nC’est **son amie**.（这是他的女性朋友）\n\n5. 对话练习\n\nQ: C’est **ta voiture** ?\n\nA: Oui, c’est **ma voiture**.\n\nA: Non, c’est **sa voiture**.\n\n6. 常见错误\n\n❌ ma ami\n✅ **mon ami**\n\n❌ ses livre\n✅ **ses livres**',
      examples: [
        { sentence: 'Mon père travaille.', ipa: '/mɔ̃ pɛʁ tʁa.vaj/', translation: '我的父亲在工作。' },
        { sentence: 'Ma mère cuisine.', ipa: '/ma mɛʁ kɥi.zin/', translation: '我的母亲在做饭。' },
        { sentence: 'C’est son amie.', ipa: '/sɛ sɔ̃ na.mi/', translation: '这是他的女性朋友。' }
      ]
    },
    {
      id: 'a1-5',
      level: 'A1',
      title: '5. 第一组动词：直陈式现在时 (-er)',
      explanation: 'Regular -er verbs follow a consistent conjugation pattern in the present tense.',
      explanationZh: '1. 核心规则\n\n约 90% 的法语动词以 **-er** 结尾。\n\n第一组动词的现在时变位规则高度统一，是入门重点。\n\n2. 变位公式\n\n动词原形去掉 **-er** + 对应人称词尾\n\n3. 变位表（以 parler 为例）\n\n| 人称 | 词尾 | 变位 | 中文 |\n| :--- | :--- | :--- | :--- |\n| Je | **-e** | **parle** | 我说 |\n| Tu | **-es** | **parles** | 你说 |\n| Il / Elle | **-e** | **parle** | 他 / 她说 |\n| Nous | **-ons** | **parlons** | 我们说 |\n| Vous | **-ez** | **parlez** | 您 / 你们说 |\n| Ils / Elles | **-ent** | **parlent** | 他们 / 她们说 |\n\n4. 常见第一组动词\n\n**aimer**（喜欢）\n\n**manger**（吃）\n\n**travailler**（工作）\n\n**habiter**（居住）\n\n**écouter**（听）\n\n5. 例句展示\n\n**Je mange** une pomme.\n\n**Tu habites** où ?\n\n**Nous travaillons** ensemble.\n\n**Ils aiment** la musique.\n\n6. 发音要点\n\n- **-ent**（ils / elles）不发音\n\n- **-ons** 发 [ɔ̃]\n\n- **-ez** 发 [e]',
      examples: [
        { sentence: 'Je mange une pomme.', ipa: '/ʒə mɑ̃ʒ yn pɔm/', translation: '我在吃一个苹果。' },
        { sentence: 'Tu habites où ?', ipa: '/ty a.bit u/', translation: '你住在哪里？' },
        { sentence: 'Nous travaillons ensemble.', ipa: '/nu tʁa.va.jɔ̃ ɑ̃.sɑ̃bl/', translation: '我们一起工作。' },
        { sentence: 'Ils aiment la musique.', ipa: '/il zɛm la my.zik/', translation: '他们喜欢音乐。' }
      ]
    }
  ],
  A2: [
    {
      id: 'a2-1',
      level: 'A2',
      title: '1. 部分冠词 (Article partitif)',
      explanation: 'Partitive articles represent an unknown or uncountable quantity of something.',
      explanationZh: '1. 核心规则\n\n部分冠词用于表示不可数名词或部分量。\n\n常用于：食物、饮料、抽象概念。\n\n含义相当于英语 some / any。\n\n2. 形式结构\n\n| 类型 | 形式 | 例子 | 中文 |\n| :--- | :--- | :--- | :--- |\n| 阳性单数 | **du** | du pain | 一些面包 |\n| 阴性单数 | **de la** | de la confiture | 一些果酱 |\n| 复数 | **des** | des légumes | 一些蔬菜 |\n| 元音 / 哑音 h | **de l’** | de l’eau | 一些水 |\n\n3. 使用场景对比\n\n| 冠词类型 | 用法说明 | 例子 | 中文 |\n| :--- | :--- | :--- | :--- |\n| 不定冠词 | 可数名词，泛指一个 | un livre | 一本书 |\n| 部分冠词 | 不可数名词，部分量 | du lait | 一些牛奶 |\n| 定冠词 | 特指 | le lait | 这牛奶 |\n\n4. 否定句中的变化\n\nJe prends du café.\n\nJe ne prends pas **de** café.\n\nIl y a des livres.\n\nIl **n’**y a pas **de** livres.\n\n5. 例句展示\n\nJe bois **du** thé le matin.\n\nElle achète **de la** viande.\n\nNous mangeons **des** pâtes.\n\nJe ne veux pas **de** sel.\n\n6. 特殊规则\n\n表达喜好时使用定冠词：\n\nJ’aime **le** chocolat.\n\nJ’adore **la** viande.\n\n数量副词后不用部分冠词：\n\nbeaucoup **de**\n\nun peu **de**',
      examples: [
        { sentence: 'Je bois du thé le matin.', ipa: '/ʒə bwa dy te lə ma.tɛ̃/', translation: '我早上喝茶。' },
        { sentence: 'Je ne prends pas de sucre.', ipa: '/ʒə nə pʁɑ̃ pa də sykʁ/', translation: '我不加糖。' }
      ]
    },
    {
      id: 'a2-2',
      level: 'A2',
      title: '2. 形容词的比较级与最高级',
      explanation: 'Comparative and superlative forms are used to compare levels and express extremes.',
      explanationZh: '1. 核心规则\n\n比较级：比较两个事物的程度。\n\n最高级：表示在某一范围内达到极致。\n\n2. 比较级结构\n\n| 类型 | 法语结构 | 中文 | 例子 |\n| :--- | :--- | :--- | :--- |\n| 较高 | **plus** + adj + **que** | 更… | plus grand que |\n| 相同 | **aussi** + adj + **que** | 一样… | aussi grand que |\n| 较低 | **moins** + adj + **que** | 不如… | moins grand que |\n\n3. 最高级结构\n\n相对最高级：\n\n**le / la / les plus** + adj + **de**\n\n**le / la / les moins** + adj + **de**\n\n绝对最高级：\n\n**très / trop / extrêmement** + adj\n\n4. 性数配合说明\n\n比较级与最高级中的形容词仍需与主语进行性数配合。\n\n5. 例句展示｜比较级\n\nParis est **plus grand que** Lyon.\n\nMon français est **aussi bon que** le tien.\n\nCe livre est **moins intéressant que** l’autre.\n\n6. 例句展示｜最高级\n\nC’est le film **le plus intéressant**.\n\nElle est la moins bavarde de la classe.\n\nC’est **très** important.\n\n7. 不规则形式\n\n**bon** → **meilleur** → **le meilleur**\n\n**mauvais** → **pire** → **le pire**',
      examples: [
        { sentence: 'Paris est plus grand que Lyon.', ipa: '/pa.ʁi ɛ ply ɡʁɑ̃ kə ljɔ̃/', translation: '巴黎比里昂大。' },
        { sentence: 'C’est le meilleur restaurant de la ville.', ipa: '/sɛ lə mɛ.jœʁ ʁɛs.tɔ.ʁɑ̃ də la vil/', translation: '这是城里最好的餐厅。' }
      ]
    },
    {
      id: 'a2-3',
      level: 'A2',
      title: '3. 最近将来时 (Futur proche)',
      explanation: 'Expressing upcoming actions using aller + infinitive.',
      explanationZh: '1. 核心概念\n\n最近将来时用于表达即将发生、已经计划好或确定会发生的动作。\n\n功能相当于英语中的 “be going to + 动词”。\n\n2. 构成公式\n\n**aller**（现在时变位） + **动词原形**（infinitif）\n\n3. aller 的现在时变位复习\n\n| 人称 | 变位 | 发音 |\n| :--- | :--- | :--- |\n| Je | **vais** | [vɛ] |\n| Tu | **vas** | [va] |\n| Il / Elle | **va** | [va] |\n| Nous | **allons** | [alɔ̃] |\n| Vous | **allons** | [ale] |\n| Ils / Elles | **vont** | [vɔ̃] |\n\n4. 完整结构示例（以 parler 为例）\n\n| 人称 | 结构 | 例句 | 中文 |\n| :--- | :--- | :--- | :--- |\n| Je | vais + inf. | **Je vais parler** | 我马上要说话 |\n| Tu | vas + inf. | **Tu vas parler** | 你马上要说话 |\n| Il / Elle | va + inf. | **Il va parler** | 他马上要说话 |\n| Nous | allons + inf. | **Nous allons parler** | 我们马上要说话 |\n| Vous | allez + inf. | **Vous allez parler** | 您/你们马上要说话 |\n| Ils / Elles | vont + inf. | **Ils vont parler** | 他们马上要说话 |\n\n5. 肯定句、否定句、疑问句\n\n1）肯定句：\n**Je vais visiter Paris** la week-end prochaine.\n（我下周要去参观巴黎。）\n\n2）否定句：\n结构：**ne** + **aller 变位** + **pas** + **动词原形**\n**Je ne vais pas travailler** demain.\n（我明天不工作。）\n\n3）疑问句：\n语调上扬（口语）：**Tu vas partir** maintenant ?\nEst-ce que：**Est-ce qu’il va venir** ce soir ?\n倒装（较正式）：**Vas-tu finir** ton travail ?\n\n6. 常见错误与纠正\n\n错误 1：aller 变位错误\n❌ Je va manger.\n✅ **Je vais manger.**\n\n错误 2：动词未用原形\n❌ Je vais parles.\n✅ **Je vais parler.**\n\n错误 3：否定位置错误\n❌ Je vais ne pas venir.\n✅ **Je ne vais pas venir.**\n\n7. 情景对话示例\n\nServeur : Vous allez prendre un apéritif ?\n\nClient : Non merci, nous allons commander directement.\n\nClient : Je vais prendre le steak-frites.',
      examples: [
        { sentence: "Je vais manger au restaurant ce soir.", ipa: "/ʒə vɛ mɑ̃.ʒe o ʁɛs.tɔ.ʁɑ̃ sə swaʁ/", translation: "我今晚要去餐厅吃饭。" },
        { sentence: "Nous allons partir en vacances.", ipa: "/nu za.lɔ̃ paʁ.tiʁ ɑ̃ va.kɑ̃s/", translation: "我们要去度假了。" }
      ]
    },
    {
      id: 'a2-4',
      level: 'A2',
      title: '4. 直接宾语代词 (Pronoms COD)',
      explanation: 'Using pronouns to replace direct objects to make sentences more natural.',
      explanationZh: '1. 核心概念\n\n直接宾语代词用于替代已出现过的直接宾语，避免重复。\n\n直接宾语（COD）特征：\n- 回答 “quoi / qui”\n- 位于及物动词之后\n- 不需要介词\n\n例：Je mange **une pomme**. (mange quoi? -> une pomme)\n\n2. 代词形式表\n\n| 宾语类型 | 代词 | 发音 | 中文 |\n| :--- | :--- | :--- | :--- |\n| 阳性单数 | **le** | [lə] | 它 / 他 |\n| 阴性单数 | **la** | [la] | 它 / 她 |\n| 复数 | **les** | [le] | 它们 |\n| 元音前 | **l’** | [l] | 它 |\n\n3. 基本规则\n\n规则 1：位置\n直接宾语代词放在**变位动词前**。\nJe lis le livre. → **Je le lis.**\n\n规则 2：否定句位置\n结构：**ne** + **代词** + **动词** + **pas**\n**Je ne le comprends pas.**\n\n规则 3：省音规则\nle / la + 元音或哑音 h → **l’**\n**Je l’aime.** / **Tu l’écoutes ?**\n\n4. 完整变位示例（voir）\n\n| 原句 | 代词句 | 中文 |\n| :--- | :--- | :--- |\n| Je vois le garçon. | **Je le vois.** | 我看见他 |\n| Je vois la fille. | **Je la vois.** | 我看见她 |\n| Je vois les enfants. | **Je les vois.** | 我看见他们 |\n| Tu vois le film. | **Tu le vois.** | 你看这部电影 |\n| Nous voyons les amis. | **Nous les voyons.** | 我们看见朋友 |\n\n5. 使用场景示例\n\nA : Tu as lu le nouveau roman ?\n\nB : Oui, **je l’ai lu** la semaine dernière.\n\n6. 常见错误与纠正\n\n❌ Je comprends le.\n✅ **Je le comprends.**\n\n❌ Je le aime.\n✅ **Je l’aime.**\n\n❌ J’ai une voiture. Je le lave.\n✅ **J’ai une voiture. Jacques la lave.**\n\n❌ Voici mes amis. Je la invite.\n✅ **Voici mes amis. Je les invite.**',
      examples: [
        { sentence: "Je le vois dans la rue.", ipa: "/ʒə lə vwa dɑ̃ la ʁy/", translation: "我在街上看见他。" },
        { sentence: "Elle les aime beaucoup.", ipa: "/ɛl le zɛm bo.ku/", translation: "她很喜欢他们。" }
      ]
    }
  ],
  B1: [
    {
      id: 'b1-1',
      level: 'B1',
      title: '1. Passé composé (复合过去时)',
      explanation: 'Used for completed actions with results in the present.',
      explanationZh: '1. 使用场景\n\n1. 已经完成的动作\n2. 与现在有结果关系\n\n2. 构成规则\n\n主语 + avoir / être + 过去分词\n\n3. Être 动词（必须背诵）\n\naller, venir, arriver, partir, entrer, sortir, rester, tomber, monter, descendre, naître, mourir...\n\n4. 常见错误\n\n❌ 忘记助动词为 être 时的性数配合\n❌ avoir / être 助动词混用',
      examples: [
        { sentence: 'Elle est arrivée tôt.', ipa: '/ɛl ɛ ta.ʁi.ve to/', translation: '她很早就到了。' },
        { sentence: 'J’ai fini le rapport.', ipa: '/ʒe fi.ni lə ʁa.pɔʁ/', translation: '我完成了报告。' }
      ]
    },
    {
      id: 'b1-2',
      level: 'B1',
      title: '2. 间接宾语 COI (lui / leur)',
      explanation: 'Used when speaking to or giving something to "someone" (preceded by "à").',
      explanationZh: '1. 使用场景\n\n对“人”说话、给东西（代替 à + 人）\n\n2. 对应关系\n\n- à Marie → lui\n- aux enfants → leur\n\n3. 例句提示\n\nCOI 代词放在变位动词之前. ',
      examples: [
        { sentence: 'Je lui parle.', ipa: '/ʒə lɥi paʁl/', translation: '我跟她/他说话。' },
        { sentence: 'Il leur donne un cadeau.', ipa: '/il lœʁ dɔn œ̃ ka.do/', translation: '他给他们一个礼物。' }
      ]
    },
    {
      id: 'b1-3',
      level: 'B1',
      title: '3. 关系代词 qui 与 que',
      explanation: 'Relative pronouns qui and que are used to link sentences and avoid repetition.',
      explanationZh: '1. 教学主题\n\n关系从句的构建基础：关系代词 qui 与 que\n\n2. 核心概念\n\nqui 和 que 用于连接两个句子，避免重复。\n\n构成关系从句（定语从句），相当于英语的 who / which / that。\n\n核心区别：\n- **qui** → 在从句中作主语\n- **que** → 在从句中作直接宾语\n\n3. 基本结构示例\n\n原句：\nJe connais l’homme.\nL’homme parle français.\n\n合并后：\nJe connais l’homme **qui** parle français.\n\n4. 规则一：qui 作主语\n\n结构：qui + 动词\n\n功能：代替先行词，在从句中作主语。\n\n例句：\n- La femme **qui** habite à côté est médecin.\n- Les livres **qui** sont sur la table sont à moi.\n- C’est moi **qui** ai raison.\n\n说明：qui 在从句中分别作 habite / sont / ai 的主语。\n\n5. 规则二：que 作直接宾语\n\n结构：que + 主语 + 动词\n\n功能：代替先行词，在从句中作直接宾语。\n\n元音前省音为 **qu’**。\n\n例句：\n- Le film **que** nous avons vu hier était excellent.\n- La robe **qu’**elle a achetée est très belle.\n- Les amis **que** j’ai invités vont venir.\n\n6. 对比表\n\n| 先行词角色 | 关系代词 | 例子 | 从句分析 |\n| :--- | :--- | :--- | :--- |\n| 人（主语） | **qui** | L’homme qui parle | qui = 主语 |\n| 物（主语） | **qui** | Le livre qui est intéressant | qui = 主语 |\n| 人（宾语） | **que** | La femme que je connais | que = 宾语 |\n| 物（宾语） | **que** | Le film que j’aime | que = 宾语 |\n\n7. 常见错误与纠正\n\n❌ L’homme que parle français.\n✅ L’homme **qui** parle français.\n\n❌ Le livre qui j’ai lu.\n✅ Le livre **que** j’ai lu.\n\n❌ La maison **qu’**est grande.\n✅ La maison **qui** est grande.\n\n8. 进阶用法 (B1+)\n\n1）与介词连用：\nL’homme avec **qui** je travaille.\n说明：介词后只能用 qui。\n\n2）指代整个句子：\nIl pleut, ce **qui** m’empêche de sortir.\n\n9. 翻译训练\n\n我正在找昨天丢失的那把钥匙。\n→ Je cherche la clé **que** j’ai perdue hier.\n\n教我们法语的那位老师是巴黎人。\n→ Le professeur **qui** nous enseigne le français est parisien.\n\n10. 口语对话练习\n\n- A: Tu connais la femme **qui** travaille à la bibliothèque ?\n- B: Oui, c’est celle **que** j’ai rencontrée la semaine dernière.',
      examples: [
        { sentence: "L'homme qui parle français est mon professeur.", ipa: "/lɔm ki paʁl fʁɑ̃.sɛ ɛ mɔ̃ pʁɔ.fɛ.sœʁ/", translation: "那个说法语的男人是我的老师。" },
        { sentence: "C'est la voiture que j'ai achetée hier.", ipa: "/sɛ la vwa.tyʁ kə ʒe aʃ.te jɛʁ/", translation: "这是我昨天买的那辆车。" }
      ]
    }
  ],
  B2: [
    {
      id: 'b2-1',
      level: 'B2',
      title: '1. 虚拟式过去时 (Subjonctif passé)',
      explanation: 'Subjonctif passé is used to express subjective attitudes toward completed actions in the past.',
      explanationZh: '1. 核心概念\n\n虚拟式过去时用于表达对过去动作的主观态度（愿望、怀疑、情感、判断等），强调动作在说话时已经完成。\n\n时机判断：\n- 主句动词：现在时/将来时\n- 从句动作：已经发生（相对于主句动词的时间）\n\n2. 构成公式\n\n助动词 (avoir/être) 的虚拟式现在时 + 动词过去分词\n\n3. 变位详解\n\n1) 助动词变位 (Subjonctif présent)\n\n| 人称 | avoir | être |\n| :--- | :--- | :--- |\n| que je | **aie** | **sois** |\n| que tu | **aies** | **sois** |\n| qu\'il/elle | **ait** | **soit** |\n| que nous | **ayons** | **soyons** |\n| que vous | **ayez** | **soyez** |\n| qu\'ils/elles | **aient** | **soient** |\n\n2) 过去分词构成\n- 第一组动词：parler → **parlé**\n- 第二组动词：finir → **fini**\n- 第三组动词：avoir → **eu**, être → **été**, faire → **fait**\n\n3) 完整变位示例\n- **parler**（说话）：que j\'aie parlé, que tu aies parlé, qu\'il ait parlé...\n- **aller**（去，用 être）：que je sois allé(e), que tu sois allé(e), qu\'il soit allé / qu\'elle soit allée\n\n*注意：用 être 时过去分词需进行性数配合。\n\n4. 使用场景与例句\n\n场景1：表达遗憾或欣慰（过去已发生）\n- Je regrette que tu **aies manqué** ce spectacle. (现在遗憾，错过发生在过去)\n- Je suis content que vous **soyez venus**. (现在高兴，来的动作已完成)\n\n场景2：怀疑或否认过去事实\n- Je doute qu\'il **ait dit** la vérité.\n- Elle nie que cela **se soit passé** ainsi.\n\n场景3：在连词短语后（时间先后关系）\n- Avant que tu **ne sois parti**, préviens-moi.\n- Bien qu\'il **ait étudié**, il a échoué à l\'examen.\n\n场景4：最高级后的否定或疑问\n- C\'est le meilleur film que j\'**aie jamais vu**.\n\n5. 时间对比表\n\n| 时态 | 例句 | 时间关系 | 中文 |\n| :--- | :--- | :--- | :--- |\n| 虚拟现在时 | Je veux que tu viennes. | 将来发生 | 我要你来。 |\n| 虚拟过去时 | Je regrette que tu ne sois pas venu. | 已经发生 | 我很遗憾你没来。 |\n| 虚拟未完成时 | Il fallait que tu vinsse. | 过去将来 | (当时)需要你来。 |\n| 虚拟愈过去时 | Il regrettait que tu ne fusses pas venu. | 过去的过去 | (当时)他很遗憾你没来。 |\n\n6. 与直陈式的对比\n\n**虚拟式过去时**（主观，已完成）：\nJe suis surpris qu\'il **ait réussi**. (表达个人惊讶，不确认事实)\n\n**直陈式复合过去时**（客观事实）：\nJe sais qu\'il **a réussi**. (陈述已知事实)\n\n7. 常见错误\n\n错误1：时间混淆\n❌ Je suis désolé que tu sois malade. (生病若是过去的事，应用过去时)\n✅ **Je suis désolé que tu aies été malade.**\n\n错误2：助动词选择错误\n❌ Je doute qu\'elle aie allé à Paris. (aller 用 être)\n✅ **Je doute qu\'elle soit allée à Paris.**\n\n错误3：性数配合遗漏\n❌ Il est possible qu\'elle sois arrivé.\n✅ **Il est possible qu\'elle soit arrivée.**',
      examples: [
        { sentence: "Je regrette que tu aies manqué ce spectacle.", ipa: "/ʒə ʁə.ɡʁɛt kə ty e mɑ̃.ke sə spɛk.takl/", translation: "我很遗憾你错过了这场演出。" },
        { sentence: "Je doute qu'il ait dit la vérité.", ipa: "/ʒə dut kil e di la ve.ʁi.te/", translation: "我怀疑他说了实话。" }
      ]
    }
  ],
  C1: [
    {
      id: 'c1-1',
      level: 'C1',
      title: '1. 条件式的深层用法 (Les nuances du conditionnel)',
      explanation: 'Advanced usage of the conditional mood beyond simple hypotheses.',
      explanationZh: '1. 核心概念\n\n在C1级别，条件式不再仅仅是表达“如果...就...”，而是承载着礼貌、假设、委婉、推测、后悔、文学想象等丰富语义的复杂语态。\n\n2. 条件式构成复习\n\n词尾系统（以不定式为基础）：\n\n| 人称 | 词尾 | 例词：parler | 例词：finir | 例词：être |\n| :--- | :--- | :--- | :--- | :--- |\n| Je | -ais | parlerais | finirais | serais |\n| Tu | -ais | parlerais | finirais | serais |\n| Il/Elle | -ait | parlerait | finirait | serait |\n| Nous | -ions | parlerions | finirions | serions |\n| Vous | -iez | parleriez | finiriez | seriez |\n| Ils/Elles | -aient | parleraient | finiraient | seraient |\n\n3. 过去条件式构成\n\navoir/être的条件式现在时 + 过去分词\n\n- J\'aurais parlé（我本来会说）\n- Il serait arrivé（他应该已经到了）\n\n4. 高级句法结构\n\n结构1：条件式在关系从句中\nC\'est un livre qui intéresserait tout chercheur dans ce domaine.（这是一本该领域任何研究者都会感兴趣的书。）\n说明：表达普遍可能性。\n\n结构2：条件式在时间状语从句后\nQuand il aurait accumulé assez de preuves, il publierait ses résultats.（当他积累到足够证据时，就会发表他的结果。）\n说明：文学性假设叙事。\n\n结构3：省略si的条件句\nVoulût-il le faire, qu\'il n\'en aurait pas les moyens.（即使他想做，也没有能力。）\n说明：文学性倒装结构，voulût是虚拟式未完成时。\n\n结构4：条件式+不定式\nOn le dirait sorti d\'un tableau de la Renaissance.（他简直像是从文艺复兴画作中走出来的。）\n说明：比喻性表达。\n\n5. 常见高级错误\n\n错误1：混淆条件式与虚拟式\n❌ Il faut que tu irais voir un médecin.\n✅ Il faut que tu ailles voir un médecin.（你必须去看医生。）\n\n错误2：时间逻辑混乱\n❌ Si j\'avais su hier, je viens aujourd\'hui.\n✅ Si j\'avais su hier, je serais venu aujourd\'hui.（如果我昨天知道，我今天就来了。）\n\n错误3：过度使用条件式\n❌ Je voudrais vous informe que...\n✅ Je voudrais vous informer que... 或 Je vous informe que...\n\n错误4：文学语体误用\n❌ Elle pensa qu\'il sera en retard.\n✅ Elle pensa qu\'il serait en retard.（她心想他会迟到。）',
      examples: [
        { sentence: "Si j'avais eu le choix, j'aurais agi différemment.", ipa: "/si ʒa.vɛ y lə ʃwa, ʒo.ʁɛ a.ʒi di.fe.ʁa.mɑ̃/", translation: "如果我有选择，我会有不同的做法。" },
        { sentence: "On dirait qu'il va pleuvoir.", ipa: "/ɔ̃ di.ʁɛ kil va plø.vwaʁ/", translation: "看来好像要下雨了。" }
      ]
    }
  ]
};