export type SkillGroup = {
  id: string
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    id: 'agent',
    label: 'AI Agent / LLM',
    items: [
      'LangGraph',
      'FastAPI',
      'RAG',
      'MCP / Tool-use',
      'QLoRA · SFT / DPO',
      '语音 Agent（Twilio / Retell / Whisper）',
      '评测与观测',
    ],
  },
  {
    id: 'robot',
    label: '具身 / 机器人',
    items: [
      'MuJoCo / mjlab / Isaac Sim',
      'PPO · 课程学习',
      'Sim2Sim / ONNX 导出',
      'ROS2 · Nav2 · slam_toolbox',
      'OpenCV · 逆运动学',
      '双足运动控制',
    ],
  },
  {
    id: 'eng',
    label: '工程与后端',
    items: [
      'Python / C++',
      'Java · Spring Boot / Cloud',
      'MySQL · Redis · Neo4j · SQLite · Qdrant',
      'Vue 3 · Cesium',
      'UDP / WebSocket',
      'Git · Linux / WSL',
    ],
  },
  {
    id: 'delivery',
    label: '交付与支持',
    items: [
      'Linux · Nginx 部署',
      'ELK 日志排查',
      'JMeter 压测与上线验收',
      '接口文档 · 测试用例',
      '最小复现用例编写',
      '异构数据源接入（DB / FTP / Excel / API）',
    ],
  },
]
