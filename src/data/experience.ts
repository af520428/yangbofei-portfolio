export type ExperienceItem = {
  id: string
  period: string
  org: string
  role: string
  summary: string
  highlights?: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'open-media',
    period: '2026.02 – 2026.05',
    org: 'Open Media（AI 语音 Agent 团队）',
    role: 'AI Voice Agent 工程实习',
    summary:
      '面向美国偏远地区餐饮场景，从 0 搭建「语音输入 → 意图理解 → 订单确认 → 订单生成」端到端订餐 Agent。',
    highlights: [
      'Twilio + Retell AI + ASR / LLM + Tool-use 全链路',
      '自定义词典 + 上下文提示，关键实体识别准确率 +20%',
      '二次确认与价格一致性校验，订单错误率 -30%；首字延迟 < 800ms',
    ],
  },
  {
    id: 'geovis',
    period: '2025.07 – 2026.01',
    org: '中科星图股份有限公司',
    role: '后端开发实习',
    summary:
      '参与千万级作战推演仿真平台与百万级数据资源管理平台：UDP 二进制帧解析、配置管理、GIS 可视化与 Neo4j 图谱。',
    highlights: [
      'UDP + SQLite / XML + Vue3 + Cesium / ECharts',
      'Spring Boot + 异构数据源（DB / FTP / Excel / API）+ Neo4j',
      '资源树大数据量优化：Map 索引 + 虚拟滚动',
    ],
  },
  {
    id: 'kuro',
    period: '2024.12 – 2025.02',
    org: '库洛游戏（Kuro Games）',
    role: '后端开发实习',
    summary:
      '参与《战双帕弥什》版本活动与关卡系统后端：配置热更、关卡数据结构、类箱庭玩法协作与线上排查。',
    highlights: [
      'JSON 解析与缓存优化，配置加载耗时 -20%',
      'ELK 定位并修复 3 个核心交互 Bug',
    ],
  },
  {
    id: 'zhonghuan',
    period: '2024.07 – 2024.09',
    org: '中寰科技有限公司',
    role: '后端开发实习',
    summary:
      '企业级 SaaS：Spring Cloud + RBAC 权限与报表模块；SQL / Redis 优化与 JMeter 压测验收。',
    highlights: [
      '复杂报表查询 2s → 500ms 以内',
      '保障系统在 500 QPS 下稳定运行',
    ],
  },
  {
    id: 'research',
    period: '2026 – 至今',
    org: '研究课题（在研）· 自学习适应抓取',
    role: '论文方向 · 算法与仿真',
    summary:
      '基于预测的机械臂自适应操作：世界模型预测验证 + 风险门控插点 + 经验技能图；2D 快速仿真已有带 CI 的对照结论，高保真层对接 MuJoCo / Isaac。',
    highlights: [
      '本地工程：D:\\自学习适应抓取算法',
      'GitHub：adaptive-waypoint-manipulation',
      '实验做完后成文（机制设计 + 可证伪评估）',
    ],
  },
  {
    id: 'edu',
    period: '2022.09 – 2026.07',
    org: '黑龙江工程学院昆仑旅游学院',
    role: '计算机科学与技术 · 本科',
    summary: '本科在读；实习、自建系统与开源工具见下方项目。',
  },
]
