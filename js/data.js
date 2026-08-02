// 班级助手 - 数据存储和管理系统
// 使用 LocalStorage 持久化数据

const DB = {
  // 初始化默认数据
  init() {
    if (!localStorage.getItem('class_assistant_init')) {
      // 学生数据
      const students = [
        { id: 1, name: '张小明', gender: '男', avatar: '张', group: 1, tags: ['优秀'], notes: '' },
        { id: 2, name: '李小红', gender: '女', avatar: '李', group: 1, tags: ['进步'], notes: '' },
        { id: 3, name: '王小华', gender: '男', avatar: '王', group: 2, tags: [], notes: '' },
        { id: 4, name: '赵小丽', gender: '女', avatar: '赵', group: 2, tags: ['优秀'], notes: '' },
        { id: 5, name: '刘小强', gender: '男', avatar: '刘', group: 3, tags: ['待关注'], notes: '' },
      ];
      
      // 作业数据
      const homework = [
        { id: 1, subject: '数学', title: '分数练习题', deadline: '2026-08-05', status: 'active', submissions: [1, 2, 3, 4] },
        { id: 2, subject: '语文', title: '课文背诵', deadline: '2026-08-06', status: 'active', submissions: [1, 2, 3, 4, 5] },
        { id: 3, subject: '英语', title: '单词默写', deadline: '2026-08-04', status: 'completed', submissions: [1, 2, 3, 4, 5] },
      ];
      
      // 成绩数据
      const grades = [
        { id: 1, studentId: 1, subject: '数学', score: 95, exam: '月考', date: '2026-07-15' },
        { id: 2, studentId: 2, subject: '数学', score: 88, exam: '月考', date: '2026-07-15' },
        { id: 3, studentId: 3, subject: '数学', score: 76, exam: '月考', date: '2026-07-15' },
        { id: 4, studentId: 4, subject: '数学', score: 92, exam: '月考', date: '2026-07-15' },
        { id: 5, studentId: 5, subject: '数学', score: 68, exam: '月考', date: '2026-07-15' },
      ];
      
      // 违纪数据
      const discipline = [
        { id: 1, studentId: 5, type: '迟到', desc: '早上迟到 10 分钟', date: '2026-08-01', level: 'light' },
        { id: 2, studentId: 3, type: '未交作业', desc: '数学作业未交', date: '2026-08-02', level: 'medium' },
        { id: 3, studentId: 5, type: '课堂讲话', desc: '上课讲话被提醒', date: '2026-08-03', level: 'light' },
      ];
      
      // 请假数据
      const leaves = [
        { id: 1, studentId: 2, type: '病假', reason: '感冒发烧', startDate: '2026-08-01', endDate: '2026-08-02', status: 'approved' },
      ];
      
      // 工作留痕
      const worklogs = [
        { id: 1, type: '班会', title: '安全教育班会', content: '开展暑期安全教育', date: '2026-08-01', tags: ['班会'] },
        { id: 2, type: '家访', title: '张小明家访', content: '了解学生家庭情况', date: '2026-07-28', tags: ['家访'] },
      ];
      
      // 谈话记录
      const talks = [
        { id: 1, studentId: 5, type: '纪律谈话', content: '关于近期迟到问题的谈话', date: '2026-08-02', followUp: '继续观察' },
      ];
      
      // 待办事项
      const todos = [
        { id: 1, title: '班会课需准备安全教育材料', time: '明天 08:00', type: 'reminder', done: false },
        { id: 2, title: '下周期中家长会，需提前发通知', time: '周五', type: 'regular', done: false },
        { id: 3, title: '与新转入学生张乐进行入学谈话', time: '本周内', type: 'communication', done: false },
      ];
      
      // 座位数据
      const seating = {
        rows: 6,
        cols: 7,
        seats: [
          { row: 1, col: 1, studentId: 1 },
          { row: 1, col: 2, studentId: 2 },
          { row: 1, col: 3, studentId: 3 },
          { row: 1, col: 4, studentId: 4 },
          { row: 1, col: 5, studentId: 5 },
        ]
      };
      
      localStorage.setItem('students', JSON.stringify(students));
      localStorage.setItem('homework', JSON.stringify(homework));
      localStorage.setItem('grades', JSON.stringify(grades));
      localStorage.setItem('discipline', JSON.stringify(discipline));
      localStorage.setItem('leaves', JSON.stringify(leaves));
      localStorage.setItem('worklogs', JSON.stringify(worklogs));
      localStorage.setItem('talks', JSON.stringify(talks));
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('seating', JSON.stringify(seating));
      localStorage.setItem('class_assistant_init', 'true');
    }
  },
  
  // 通用 CRUD 方法
  getAll(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },
  
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  
  add(key, item) {
    const data = this.getAll(key);
    item.id = Date.now();
    data.push(item);
    this.save(key, data);
    return item;
  },
  
  update(key, id, updates) {
    const data = this.getAll(key);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updates };
      this.save(key, data);
      return data[index];
    }
    return null;
  },
  
  delete(key, id) {
    const data = this.getAll(key).filter(item => item.id !== id);
    this.save(key, data);
  },
  
  // 学生相关
  getStudents() { return this.getAll('students'); },
  addStudent(student) { return this.add('students', student); },
  updateStudent(id, updates) { return this.update('students', id, updates); },
  deleteStudent(id) { this.delete('students', id); },
  
  // 作业相关
  getHomework() { return this.getAll('homework'); },
  addHomework(hw) { return this.add('homework', hw); },
  updateHomework(id, updates) { return this.update('homework', id, updates); },
  deleteHomework(id) { this.delete('homework', id); },
  getHomeworkStats() {
    const hw = this.getHomework();
    const active = hw.filter(h => h.status === 'active');
    const totalSubmissions = active.reduce((sum, h) => sum + h.submissions.length, 0);
    const totalStudents = this.getStudents().length;
    const notSubmitted = totalStudents * active.length - totalSubmissions;
    return { active: active.length, notSubmitted, totalSubmissions };
  },
  
  // 成绩相关
  getGrades() { return this.getAll('grades'); },
  addGrade(grade) { return this.add('grades', grade); },
  updateGrade(id, updates) { return this.update('grades', id, updates); },
  deleteGrade(id) { this.delete('grades', id); },
  getGradeStats() {
    const grades = this.getGrades();
    if (grades.length === 0) return { avg: 0, highest: 0, lowest: 0 };
    const scores = grades.map(g => g.score);
    return {
      avg: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 10) / 10,
      highest: Math.max(...scores),
      lowest: Math.min(...scores)
    };
  },
  
  // 违纪相关
  getDiscipline() { return this.getAll('discipline'); },
  addDiscipline(d) { return this.add('discipline', d); },
  updateDiscipline(id, updates) { return this.update('discipline', id, updates); },
  deleteDiscipline(id) { this.delete('discipline', id); },
  getDisciplineStats() {
    const d = this.getDiscipline();
    const thisWeek = d.filter(item => {
      const days = (Date.now() - new Date(item.date).getTime()) / 86400000;
      return days <= 7;
    });
    return { total: d.length, thisWeek: thisWeek.length };
  },
  
  // 请假相关
  getLeaves() { return this.getAll('leaves'); },
  addLeave(leave) { return this.add('leaves', leave); },
  updateLeave(id, updates) { return this.update('leaves', id, updates); },
  deleteLeave(id) { this.delete('leaves', id); },
  getLeaveStats() {
    const leaves = this.getLeaves();
    const today = leaves.filter(l => {
      const start = new Date(l.startDate);
      const end = new Date(l.endDate);
      const now = new Date();
      return now >= start && now <= end;
    });
    return { today: today.length, total: leaves.length };
  },
  
  // 工作留痕
  getWorklogs() { return this.getAll('worklogs'); },
  addWorklog(log) { return this.add('worklogs', log); },
  updateWorklog(id, updates) { return this.update('worklogs', id, updates); },
  deleteWorklog(id) { this.delete('worklogs', id); },
  
  // 谈话记录
  getTalks() { return this.getAll('talks'); },
  addTalk(talk) { return this.add('talks', talk); },
  updateTalk(id, updates) { return this.update('talks', id, updates); },
  deleteTalk(id) { this.delete('talks', id); },
  
  // 待办事项
  getTodos() { return this.getAll('todos'); },
  addTodo(todo) { return this.add('todos', todo); },
  updateTodo(id, updates) { return this.update('todos', id, updates); },
  deleteTodo(id) { this.delete('todos', id); },
  toggleTodo(id) {
    const todos = this.getTodos();
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.done = !todo.done;
      this.save('todos', todos);
      return todo;
    }
    return null;
  },
  
  // 座位
  getSeating() { return JSON.parse(localStorage.getItem('seating') || '{}'); },
  saveSeating(seating) { localStorage.setItem('seating', JSON.stringify(seating)); },
  
  // 备份
  exportData() {
    const data = {
      students: this.getStudents(),
      homework: this.getHomework(),
      grades: this.getGrades(),
      discipline: this.getDiscipline(),
      leaves: this.getLeaves(),
      worklogs: this.getWorklogs(),
      talks: this.getTalks(),
      todos: this.getTodos(),
      seating: this.getSeating(),
      exportDate: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  },
  
  importData(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      if (data.students) this.save('students', data.students);
      if (data.homework) this.save('homework', data.homework);
      if (data.grades) this.save('grades', data.grades);
      if (data.discipline) this.save('discipline', data.discipline);
      if (data.leaves) this.save('leaves', data.leaves);
      if (data.worklogs) this.save('worklogs', data.worklogs);
      if (data.talks) this.save('talks', data.talks);
      if (data.todos) this.save('todos', data.todos);
      if (data.seating) this.save('seating', data.seating);
      return true;
    } catch (e) {
      return false;
    }
  }
};

// 初始化数据库
DB.init();
