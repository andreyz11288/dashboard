import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './DashboardList.module.scss';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import todoOperations from '../../Redux/Operations/todosOperations';
import todoSelectors from '../../Redux/Selectors/todosSelectors';
import MenuDone from '../MenuDone/MenuDone.jsx';
import TemplateTodo from '../TemplateTodo/TemplateTodo';

const DashboardList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoOperations.fetchTodos());
  }, [dispatch]);
  const todos = useSelector(todoSelectors.getAllTodos);
  
  const today = new Date();
  const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

  const todayList = [];
  const tomorrowList = [];
  const doneList = [];

  todos.map(todo => {
    if (!todo.done) {
      if (today.getFullYear() === new Date(Date.parse(todo.time)).getFullYear()
      && today.getMonth() === new Date(Date.parse(todo.time)).getMonth()
      && today.getDay() === new Date(Date.parse(todo.time)).getDay())
    {
        todayList.push(todo);
    }
    if ( tomorrow.getFullYear() === new Date(Date.parse(todo.time)).getFullYear()
      && tomorrow.getMonth() === new Date(Date.parse(todo.time)).getMonth()
      && tomorrow.getDay() === new Date(Date.parse(todo.time)).getDay())
    {
      tomorrowList.push(todo)
    }
    }
    else {doneList.push(todo)}
    return { todayList, tomorrowList, doneList }
  });
  return (
    <>
      <main className={s.todoListMain}>
        <div className={s.todoListDiv}>
          {todayList.length > 0 ? <>
            <p className={s.todoListTitle}>TODAY</p>
            <ul className={s.todoList}>
              <TemplateTodo />
              {todayList.map(
                ({ title, _id, time, category, difficulty, challenge }) =>
                  <li key={_id} className={s.todoItem}>
                    <DashboardListItem
                      category={category}
                      difficulty={difficulty}
                      title={title}
                      id={_id}
                      time={time}
                  ></DashboardListItem>
                  </li>
              )}
            </ul></>
            : null}
          {tomorrowList.length > 0 ? <> 
            <p className={s.todoListTitle}>TOMORROW</p>
            <ul className={s.todoList}>
              {tomorrowList.map(
                ({ title, _id, time, category, difficulty, challenge }) =>
                  <li key={_id} className={s.todoItem}>
                    <li key={_id} className={ challenge ? s.todoItemChallenge : s.todoItem}></li>
                    <DashboardListItem
                      category={category}
                      difficulty={difficulty}
                      title={title}
                      id={_id}
                      time={time}
                  ></DashboardListItem>
                  </li>
              )}
            </ul></>
            : null}
            <MenuDone todos={doneList}/>
          </div>
      </main>
    </>
  );
};

export default DashboardList;

  /**<div
        className={
          challenge
            ? `${style.TemplateTodo__challenge} ${style.TemplateTodo__group}`
            : style.TemplateTodo__group
        }
      > 
      <div className="star">
            {challenge ? (
              <Button
                onClick={!isVisible && !edit && toggleChallenge}
                content="icon-trophy"
                type="button"
                isActive={true}
              />
            ) : (
              <Button
                onClick={!isVisible && !edit && toggleChallenge}
                content="icon-Vector"
                type="button"
                isActive={!edit}
              />
            )}
            
          </div>*/