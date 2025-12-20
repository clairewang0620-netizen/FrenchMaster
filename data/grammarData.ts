
import { GrammarPoint, ProficiencyLevel } from '../types';

export const STATIC_GRAMMAR: Record<ProficiencyLevel, GrammarPoint[]> = {
  A1: [
    {
      id: 'a1-1',
      level: 'A1',
      title: '动词 Être (是)',
      explanation: 'The verb "être" is used to express identity, profession, state, or characteristics.',
      explanationZh: 'Être 用于：\n1. 表示身份 / 职业\n2. 表示状态\n3. 描述特征\n\n变位表：\n- je suis (我是)\n- tu es (你是)\n- il / elle est (他/她是)\n- nous sommes (我们是)\n- vous êtes (你们是)\n- ils / elles sont (他们/它们是)',
      examples: [
        { sentence: 'Je suis étudiante.', ipa: '/ʒə sɥi e.ty.djɑ̃t/', translation: '我是学生。' },
        { sentence: 'Nous sommes fatigués.', ipa: '/nu sɔm fa.ti.ɡe/', translation: '我们很累。' }
      ]
    },
    {
      id: 'a1-2',
      level: 'A1',
      title: '动词 Avoir (有)',
      explanation: 'The verb "avoir" is used to express possession, age, or physical/mental states.',
      explanationZh: 'Avoir 用于：\n1. 表示拥有\n2. 表示年龄\n3. 表示身体 / 心理状态\n\n变位表：\n- j’ai (我有)\n- tu as (你有)\n- il / elle a (他/她有)\n- nous avons (我们有)\n- vous avez (你们有)\n- ils / elles ont (他们/它们有)',
      examples: [
        { sentence: 'J’ai vingt ans.', ipa: '/ʒe vɛ̃t ɑ̃/', translation: '我二十岁。' },
        { sentence: 'Elle a peur.', ipa: '/ɛl a pœʁ/', translation: '她害怕。' }
      ]
    },
    {
      id: 'a1-3',
      level: 'A1',
      title: '否定结构 ne … pas',
      explanation: 'Basic negation structure in French.',
      explanationZh: '用于否定动词，结构固定。\n\n结构公式：\n主语 + ne + 变位动词 + pas\n(注：元音开头动词 ne 变为 n’)',
      examples: [
        { sentence: 'Je ne suis pas prêt.', ipa: '/ʒə nə sɥi pa pʁɛ/', translation: '我还没准备好。' },
        { sentence: 'Il n’a pas de temps.', ipa: '/il na pa də tɑ̃/', translation: '他没有时间。' }
      ]
    }
  ],
  A2: [
    {
      id: 'a2-1',
      level: 'A2',
      title: '近未来（Aller + Infinitif）',
      explanation: 'Used for planned events or actions about to happen.',
      explanationZh: '使用场景：\n1. 已经计划好的事情\n2. 即将发生的动作\n\n结构公式：\n主语 + aller（变位） + 动词不定式\n\n变位提醒：\n- je vais / tu vas / il va\n- nous allons / vous allez / ils vont\n\n易错点：\n❌ 不要用现在时替代\n❌ 不加变位直接用不定式',
      examples: [
        { sentence: 'Je vais travailler demain.', ipa: '/ʒə vɛ tʁa.va.je də.mɛ̃/', translation: '我明天要工作。' },
        { sentence: 'Ils vont partir à huit heures.', ipa: '/il vɔ̃ paʁ.ti a ɥit œʁ/', translation: '他们八点出发。' }
      ]
    },
    {
      id: 'a2-2',
      level: 'A2',
      title: '直接宾语 COD（le / la / les）',
      explanation: 'Pronouns used when the action acts directly on the object to avoid repetition.',
      explanationZh: '使用场景：\n1. 动作直接作用于对象\n2. 避免重复名词\n\n结构公式：\n主语 + COD 代词 + 动词\n\n对应关系：\n- le livre → le\n- la voiture → la\n- les enfants → les\n\n易错点：\n❌ 代词位置放错（通常在动词前）\n❌ 忽略阴阳性配合',
      examples: [
        { sentence: 'Je le vois.', ipa: '/ʒə lə vwa/', translation: '我看见它（他）。' },
        { sentence: 'Elle les aime beaucoup.', ipa: '/ɛl le zɛm bo.ku/', translation: '她很喜欢他们。' }
      ]
    }
  ],
  B1: [
    {
      id: 'b1-1',
      level: 'B1',
      title: 'Passé composé（复合过去时）',
      explanation: 'Used for completed actions with results in the present.',
      explanationZh: '使用场景：\n1. 已经完成的动作\n2. 与现在有结果关系\n\n构成规则：\n主语 + avoir / être + 过去分词\n\nÊtre 动词（必须背诵）：\naller, venir, arriver, partir, entrer, sortir, rester, tomber, monter, descendre, naître, mourir...\n\n易错点：\n❌ 忘记助动词为 être 时的性数配合\n❌ avoir / être 助动词混用',
      examples: [
        { sentence: 'Elle est arrivée tôt.', ipa: '/ɛl ɛ ta.ʁi.ve to/', translation: '她很早就到了。' },
        { sentence: 'J’ai fini le rapport.', ipa: '/ʒe fi.ni lə ʁa.pɔʁ/', translation: '我完成了报告。' }
      ]
    },
    {
      id: 'b1-2',
      level: 'B1',
      title: '间接宾语 COI（lui / leur）',
      explanation: 'Used when speaking to or giving something to "someone" (preceded by "à").',
      explanationZh: '使用场景：\n对“人”说话、给东西（代替 à + 人）\n\n对应关系：\n- à Marie → lui\n- aux enfants → leur\n\n例句提示：\nCOI 代词放在变位动词之前。',
      examples: [
        { sentence: 'Je lui parle.', ipa: '/ʒə lɥi paʁl/', translation: '我跟她/他说话。' },
        { sentence: 'Il leur donne un cadeau.', ipa: '/il lœʁ dɔn œ̃ ka.do/', translation: '他给他们一个礼物。' }
      ]
    }
  ],
  B2: [
    {
      id: 'b2-1',
      level: 'B2',
      title: 'Subjonctif（虚拟式）',
      explanation: 'Expresses subjectivity, emotion, doubt, or judgment.',
      explanationZh: '使用场景：\n1. 表达情绪\n2. 表示怀疑\n3. 主观判断\n\n常见触发结构：\n- il faut que... (必须...)\n- je doute que... (我怀疑...)\n- bien que... (尽管...)\n\n易错点：\n❌ 与直陈式混淆\n❌ 主语不同却忘记变位',
      examples: [
        { sentence: 'Il faut que tu fasses attention.', ipa: '/il fo kə ty fas a.tɑ̃.sjɔ̃/', translation: '你必须小心。' },
        { sentence: 'Je doute qu’il comprenne.', ipa: '/ʒə dut kil kɔ̃.pʁɛn/', translation: '我怀疑他是否理解。' }
      ]
    }
  ],
  C1: [
    {
      id: 'c1-1',
      level: 'C1',
      title: 'Conditionnel（条件式）',
      explanation: 'Used for hypotheses, suggestions, or polite expressions.',
      explanationZh: '使用场景：\n1. 假设 (Si + Imparfait -> Conditionnel)\n2. 建议\n3. 礼貌表达\n\n结构理解：\n词根 = Futur Simple (简单将来时)\n词尾 = Imparfait (未完成过去时)',
      examples: [
        { sentence: 'Je ferais autrement.', ipa: '/ʒə fə.ʁɛ o.tʁə.mɑ̃/', translation: '我会换种方式做。' },
        { sentence: 'Pourriez-vous préciser ?', ipa: '/pu.ʁje vu pʁe.si.ze/', translation: '您能具体说明吗？' }
      ]
    }
  ]
};
