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
]
