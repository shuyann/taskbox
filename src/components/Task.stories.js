import React from "react";
import Task from "./Task";

// Taskに対する3つの状態のテストを記載
// Storybookの基本となる階層
// - Component
//   - Story
//   - Story
//   - Story

// Storybookにコンポーネントを認識させるためには以下の内容を含むdefault exportを記述する必要がある
// - component コンポーネント自体
// - title Storybookのサイドバーにあるコンポーネントを参照する方法

// ストーリーを定義するにはテスト用の状態ごとにストーリーを生成する関数をexportする
// ストーリーは特定の状態で描画された要素を返す関数でReactの状態を持たない関数コンポーネントのようなもの
// コンポーネントにストーリーが複数連なっているので各ストーリーを単一のTemplate変数に割り当てるのが便利
// 書くべきのコードの量も減り、保守性も上がる

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
