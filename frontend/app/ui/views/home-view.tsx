"use client";
import { Member, TodoItem } from "@/app/lib/models";
import { Quotes } from "@/app/lib/quotes";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Calendar } from "@heroui/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Progress } from "@heroui/progress";
import { CircularProgress } from "@heroui/progress";

export const HomeView = ({
  user,
  memberTodo,
  familyTodo,
}: {
  user: Member;
  memberTodo: TodoItem[];
  familyTodo: TodoItem[];
}) => {
  const d = new Date();
  const weekday = d.getDay();

  const memberTodoCount: number = memberTodo.length || 0;
  let memberCompletedTodoCount: number = 0;

  const familyTodoCount: number = familyTodo.length || 0;
  let familyCompletedTodoCount: number = 0;

  memberTodo.map((todo) => {
    if (todo.completed == 1) {
      return memberCompletedTodoCount++;
    }
  });
  familyTodo.map((todo) => {
    if (todo.completed == 1) {
      return familyCompletedTodoCount++;
    }
  });

  return (
    <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6 ">
      <h1 className="text-2xl font-bold justify-self-center">
        Hello, {user.first_name} {user.last_name}!!!
      </h1>
      <div className="grid grid grid-cols-2">
        <Calendar
          aria-label="Calendar"
          defaultValue={today(getLocalTimeZone())}
          maxValue={today(getLocalTimeZone())}
        />
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Inspirational Quote"
            title="Quote of the Day"
          >
            {Quotes[weekday]}
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Progress
          isStriped
          className=""
          label="My Completed Todos"
          color="primary"
          size="md"
          showValueLabel={true}
          value={(memberCompletedTodoCount / memberTodoCount) * 100}
        />
        <Progress
          isStriped
          className=""
          label="Family Completed Todos"
          color="secondary"
          size="md"
          showValueLabel={true}
          value={(familyCompletedTodoCount / familyTodoCount) * 100}
        />
      </div>
    </div>
  );
};
