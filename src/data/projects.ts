export type ProjectImage = {
  src: string
  caption: string
}

export type Project = {
  id: string
  name: string
  tagline: string
  period: string
  role: string
  stack: string[]
  featured: boolean
  problem: string
  approach: string
  result: string
  cover?: string
  images?: ProjectImage[]
  links?: { label: string; href: string }[]
  localPath?: string
}

const asset = (path: string) => `${import.meta.env.BASE_URL}projects/${path}`

export const projects: Project[] = [
  {
    id: 'boss-auto-apply',
    name: '简历精准海投助手',
    tagline: '开源 Chrome / Edge MV3 扩展 · 筛岗 → 人岗评分 → 自动沟通 → 智能聊天',
    period: '2026.08 – 至今 · v0.5.87 已开源',
    role: '独立设计与开发，MIT 开源',
    stack: ['Chrome MV3', 'content scripts', 'chrome.storage.local', 'fetch / XHR 钩子', 'Node 单测'],
    featured: true,
    cover: asset('boss-auto-apply/cover.webp'),
    images: [
      {
        src: asset('boss-auto-apply/panel.webp'),
        caption: '主面板真实渲染：方案切换 / 筛岗字段 / BOSS 筛选锁定 / 当前岗位与评分（fixtures/面板自测.html，chrome.* 桩）',
      },
    ],
    problem:
      '海投的耗时不在投递本身，而在反复滚动列表、判断岗位值不值得投、逐个打招呼；而卡片上的薪资在文本层是 BOSS 每次重新生成的私有区字体（U+E000–U+F8FF），读不到数字就只能猜。',
    approach:
      '19 个注入脚本 + 纯逻辑 lib 分层：筛岗（职位名 / 工作地从严 / 经验 / 学历 / 公司规模六档 / HR 活跃度 / 薪资起步价区间）→ 简历画像启发式评分 0-100 与硬性门槛 → 同公司与大厂同系去重 → 每日沟通上限、额度与风控弹窗处理、停止原因落盘日志。薪资不解字体，改为给页面自己的 fetch / XHR 打钩子，从列表接口响应按「职位名 + 公司名」建明文表，取序为接口明文 → 薪资节点 → 整卡文本抠片段，读不到就分开写明原因。',
    result:
      '37 个 JS 文件、15 个 Node 单测（npm test 零依赖）；fixtures 自测页不装扩展也能渲染真实面板并点按钮验证回调；权限仅 storage + unlimitedStorage，宿主仅 zhipin.com，配置与记录全部留在本机；README 里写明已知限制与封号风险。',
    links: [{ label: 'GitHub 仓库', href: 'https://github.com/af520428/boss-auto-apply' }],
    localPath: 'D:\\Boss海投助手2.0\\boss-auto-apply',
  },
  {
    id: 'shopguard-eval',
    name: '电商客服 Agent 评测台',
    tagline: '题库 + 运行时 harness + Agent-as-Judge + 失败归因到「模型 vs 工程」',
    period: '2026.09',
    role: '独立负责评测协议、题库与 mock 域数据、运行时、Judge 与报告链路',
    stack: ['题库驱动', 'Trace 采集', 'Agent-as-Judge', '人机一致率', '失败归因'],
    featured: true,
    problem:
      '客户问「这个 Agent 能不能上线」时，靠手感答不出：同一个失败既可能是模型不会，也可能是工具没接好、提示词没给够，两种结论对应完全不同的处理办法。',
    approach:
      '搭可复现评测台：题库驱动跑题（scripted / LLM Agent 两种被测）→ 采集 transcript 与工具调用 Trace → heuristic / LLM Judge 打分（被测与 Judge 模型分离）→ 人工标定与人机一致率统计 → 报告按 model / harness / ambiguous 输出归因分布。',
    result:
      'smoke 10 题 + core 35 题垂直题库，覆盖退款、物流、换货、发票、质保、缺单号、政策边界，每题带 expects / forbidden；smoke 流水线完成率 10/10（pipeline_success_rate = 1.0）；报告可复现，用于区分「模型不会」与「工程没接好」。',
  },
  {
    id: 'trend-copilot',
    name: 'TrendCopilot',
    tagline: '科技趋势智能 Agent：采集 · 编排 · RAG · 评测闭环',
    period: '2026.03 – 2026.06',
    role: '独立负责服务、Memory、Context Engine、引用校验与评测',
    stack: ['LangGraph', 'FastAPI', 'RAG', 'SQLite', 'Qdrant', 'SSE'],
    featured: true,
    cover: asset('trend-copilot/briefing.webp'),
    images: [
      { src: asset('trend-copilot/ask.webp'), caption: '问答页：趋势提问与对比入口' },
      { src: asset('trend-copilot/briefing.webp'), caption: '简报页：科技日报（本地实机 2026-09-06）' },
      { src: asset('trend-copilot/qa_streaming.webp'), caption: '问答流式生成中（SpaceX 进展）' },
      { src: asset('trend-copilot/qa_answer.webp'), caption: '问答回答与引用编号' },
    ],
    problem:
      '科技资讯场景需要稳定的多轮问答与周报生成，同时要能追溯结论依据、抑制幻觉。',
    approach:
      '基于 LangGraph + FastAPI 落地 daily_briefing / weekly_trend / trend_query / trend_compare；工具白名单与「规划 → 检索 → 生成」闭环；关键词预筛 + 向量混合召回，Context Engine 控制 token budget 并引入 MMR；faithfulness 引用校验 + Golden Eval / Pytest。',
    result:
      '本地库约 448 篇 / 495 次 Agent run；7 个启用源；Golden Eval 约 45 条 + Pytest 约 50 文件；L3/L6 suite pass_rate=1.0。截图来自本地 http://127.0.0.1:8787 实机界面。',
    links: [{ label: 'GitHub', href: 'https://github.com/af520428' }],
    localPath: 'E:\\NewAgent',
  },
  {
    id: 'assessment-autofill',
    name: '网申测评随机答题扩展',
    tagline: '通用 DOM 识别题组 · 三级点击兜底 · 认不出用「选区模式」教一次',
    period: '2026.10',
    role: '独立设计与开发，MIT（本地已就绪，仓库待开源）',
    stack: ['Chrome MV3', '启发式 DOM 识别', '隔离世界 / 主世界事件链', 'Node 单测'],
    featured: true,
    cover: asset('assessment-autofill/cover.webp'),
    problem:
      '海投流程里的测评与岗位匹配度无关，但每套测评页的 DOM 都不一样；按站点写死选择器维护不动，写太松又会把「题干 + 正文 + 选项列表」三个并列 div 当成一组选项。',
    approach:
      '识别口径三级优先：本站已教学的选择器（点一次选项即按 origin 存本机）→ 原生 radio / checkbox / role 属性 → 同父、同标签、同角色且有公共 class 的兄弟簇，并用「容器内无 button / input / a[href]、不在 nav / header / footer、附近有题干」排除误判。点击三级递进：el.click() → 隔离世界补发 pointer / mouse 事件链 → 主世界用页面自己的构造器补发；每点一次回读选中态，读不到变化就写「可能没填上」。',
    result:
      'answer-lib 纯逻辑可 Node 单测；fixtures 带 5 种题目结构 + 3 种干扰样本，另有一张「普通表单页不应弹出面板」的反向样本；权限仅 storage + activeTab，无 host_permissions、无任何网络请求。README 直接写明纯随机期望正确率就是 1/选项数，只帮你把流程走完。',
    localPath: 'D:\\Boss海投助手2.0\\网申测评答题插件',
  },
  {
    id: 'ros2-nav',
    name: 'ROS2 小车自主导航',
    tagline: 'TurtleBot3 · Gazebo · House 预设 · SLAM · Nav2',
    period: '2026.03 – 2026.06',
    role: '仿真环境、导航链路与自主探索节点',
    stack: ['ROS2 Humble', 'Gazebo', 'Nav2', 'slam_toolbox'],
    featured: false,
    cover: asset('ros2-nav/house_demo.gif'),
    images: [
      {
        src: asset('ros2-nav/house_demo.gif'),
        caption: 'TurtleBot3 House 预设演示',
      },
      {
        src: asset('ros2-nav/house.webp'),
        caption: 'TurtleBot3 House · Gazebo',
      },
      {
        src: asset('ros2-nav/gazebo_rviz.webp'),
        caption: 'Gazebo + RViz 可视化',
      },
      {
        src: asset('ros2-nav/slam_sim.webp'),
        caption: '仿真 SLAM',
      },
      {
        src: asset('ros2-nav/map.webp'),
        caption: '建图结果 map',
      },
    ],
    problem: '室内移动机器人需要从建图、定位到自主导航与未知区域探索的完整软件链路。',
    approach:
      '基于 turtlebot3_house 预设：集成 slam_toolbox + Navigation2；开发 Frontier Exploration；调试 TF / Fixed Frame / spawn 竞态。',
    result: '打通感知—定位—规划—控制，并支持探索 / 人工目标点模式切换。',
    localPath: 'E:\\ROS2小车',
  },
  {
    id: 'jibot3',
    name: '树莓派 5 + Jibot3 视觉抓取码垛',
    tagline: 'OpenCV · 逆运动学 · 视觉闭环状态机',
    period: '2026.07 – 2026.08',
    role: '视觉感知、坐标映射、IK 与感知—执行状态机',
    stack: ['OpenCV', '逆运动学', '树莓派 5', 'Jibot3'],
    featured: false,
    problem: '在真机舵机臂上完成多目标识别、抓取、搬运与码垛闭环。',
    approach:
      'HSV 分割与像素→工作空间映射；4-DOF IK + 手眼标定；视觉反馈修正抓取位姿。',
    result: '红绿蓝多目标稳定抓取与 3 层码垛。',
  },
  {
    id: 'agent-sft',
    name: 'Agent 基座后训练与 Tool-use',
    tagline: 'Qwen3-4B · QLoRA SFT/DPO · Rubric 评测 · 端侧 Demo',
    period: '2026.02 – 2026.08',
    role: '独立完成训练、评测与 Demo',
    stack: ['QLoRA', 'SFT/DPO', 'Rubric Eval', 'Tool-use', 'Gradio'],
    featured: false,
    problem: '在消费级 8GB 显卡上跑通可复现的 Agent 后训练与工具调用对齐。',
    approach:
      'RTX 4060 8GB 上 4-bit + LoRA 多轮 SFT/DPO；双 LoRA + set_adapter 对比；Rubric + 50 题固定集。',
    result: 'Tool Success 0.714 → 0.929。',
  },
  {
    id: 'so-arm101',
    name: 'SO-ARM101 RL 抓取 + Sim2Sim',
    tagline: 'MuJoCo 高效训练 + Isaac Sim 高保真验证的机械臂抓取管线',
    period: '2026.03 – 2026.06',
    role: '独立负责环境、PPO 训练、Sim2Sim 迁移与部署验证',
    stack: ['MuJoCo', 'Isaac Sim', 'PPO', 'PointNet++', 'ONNX'],
    featured: false,
    cover: asset('so-arm101/grasp_bc.gif'),
    images: [
      { src: asset('so-arm101/grasp_bc.gif'), caption: '抓取仿真动图 · BC / 闭环策略' },
      { src: asset('so-arm101/grasp_openloop.gif'), caption: '抓取仿真动图 · open-loop 对照' },
    ],
    problem: '机械臂抓取策略训练慢、仿真迁移难，需要可复现的 RL + Sim2Sim 验证管线。',
    approach:
      'MuJoCo 六自由度抓取环境 + 课程学习与 Reward；「IL 训练 + PPO 优化」；RGB-D + PointNet++；MuJoCo → Isaac Sim 迁移与易碎物力约束。',
    result: '训练周期约 8h → 3.5h；随机位置抓取成功率约 60% → 90%。动图来自本地 arm_grasp 仿真回放。',
    localPath: 'E:\\SO-ARM101',
  },
  {
    id: 'microduck',
    name: 'Microduck 双足 RL 复现',
    tagline: 'mjlab / MuJoCo Warp · PPO · checkpoint / ONNX 导出闭环',
    period: '2026.09 – 至今',
    role: '独立完成环境、续训、导出与仿真回放',
    stack: ['mjlab', 'MuJoCo Warp', 'PPO', 'ONNX'],
    featured: false,
    cover: asset('microduck/walk.gif'),
    images: [
      { src: asset('microduck/walk.gif'), caption: '本机策略回放动图（Velocity Flat）' },
    ],
    problem: '补齐机械臂之外的 legged locomotion：能训通、能导出、能讲清配方。',
    approach:
      '跑通 Mjlab-Velocity-Flat-MicroDuck（约 1024 并行环境，续训至约 5750 iter）；梳理 BAM、域随机化与 ONNX 导出约定。',
    result: '形成「训练 → 导出 → 仿真回放」可复现闭环。动图为本机 checkpoint 回放（非上游宣传片）。',
    localPath: 'D:\\microduck_rl-main',
  },
  {
    id: 'dymoni',
    name: 'Dymoni 社会模拟沙盒',
    tagline: '大纲固定、人物可换 · 星澜科技职场对照 · 对话小说回看',
    period: '2026.02 – 2026.08',
    role: '沙盒搭建、实验配置、引擎与可视化',
    stack: ['MiroFish', 'LLM Agent', '对照实验', '对话小说播放器'],
    featured: false,
    cover: asset('dymoni/home.webp'),
    images: [
      { src: asset('dymoni/home.webp'), caption: '沙盒首页：同一职场剧本，看人格如何分叉' },
      { src: asset('dymoni/novel_list.webp'), caption: '对话小说列表（含星澜科技·三幕预演）' },
      { src: asset('dymoni/novel_playing.webp'), caption: '回放中：林傲 / 沈宁等角色互动' },
      { src: asset('dymoni/novel_report.webp'), caption: '三幕预演收束：生存模式与可见度分析' },
    ],
    problem:
      '需要可对照的社会 / 舆论推演：同一剧本下换人设，观察行为差异与传播动态。',
    approach:
      '基于 MiroFish 做对照实验沙盒：固定大纲（星澜科技四名应届生），人设可换并注入 OASIS；双平台互动后整理为对话小说回看（台词取自模拟发帖/评论）。',
    result:
      '跑通分工→考核→可见度争夺三幕预演；截图来自本地 http://localhost:3000 实机回放（sim_35ec023bde80）。',
    localPath: 'D:\\Dymoni',
  },
  {
    id: 'adaptive-grasp',
    name: '自学习适应抓取算法',
    tagline: '论文在研 · 世界模型预测验证 + 风险门控插点 + 经验技能图',
    period: '2026 – 至今',
    role: '独立完成算法设计、仿真实验与可证伪评估',
    stack: ['Numpy', '世界模型', '技能图', 'Wilson CI 评测'],
    featured: false,
    cover: asset('adaptive-grasp/e3_transfer.webp'),
    images: [
      { src: asset('adaptive-grasp/e1_calibration.webp'), caption: 'E1 世界模型校准与排序质量' },
      { src: asset('adaptive-grasp/e2_adaptive.webp'), caption: 'E2 风险门控自适应插点' },
      { src: asset('adaptive-grasp/e3_transfer.webp'), caption: 'E3 经验迁移对照（含 Wilson CI）' },
      { src: asset('adaptive-grasp/trace_e3b.webp'), caption: 'E3b 密封墙场景轨迹可视化' },
    ],
    problem:
      '抓取-搬运在新颖障碍与陌生布局下，写死骨架迁移差；需要可改写结构、可评测、能说清适用边界的自适应规划。',
    approach:
      '三层机制：①集成世界模型对候选路径做预测验证选路；②风险门控自适应插点（高风险加密 / 低风险剪枝 / 偏差超阈局部重规划）；③关系锚点技能图（编译 → 新颖起终点再落地 → 成功写回）。对照 scratch / fixed_bank / frozen_graph / evolve_graph；结论均带 Wilson 95% CI。',
    result:
      '结构可改写显著优于固定骨架（陌生障碍约 0.57–0.60 vs 0.33–0.43）；自适应插点成功率约 0.87、路标点约为稠密一半；扰动恢复与密封墙极端场景如实记录为适用边界。',
    links: [
      {
        label: 'GitHub 研究仓',
        href: 'https://github.com/af520428/adaptive-waypoint-manipulation',
      },
    ],
    localPath: 'D:\\自学习适应抓取算法',
  },
]

export function getProject(id: string) {
  return projects.find((p) => p.id === id)
}
