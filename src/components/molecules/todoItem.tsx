import CheckBox from "../atoms/checkBox";
import Text from "../atoms/text";
import Button from "../atoms/button";
import { motion, AnimatePresence } from "framer-motion";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface IProps {
  todo: ITodoItem;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, removeTodo }: IProps): JSX.Element => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{
        x: 0,
        transition: { type: "spring", damping: 20 },
      }}
      exit={{ x: -500, transition: { type: "spring", damping: 20 } }}
      className="flex flex-row justify-between px-3 mb-3 items-center bg-gradient-to-r from-cyan-800 to-sky-800 h-12 rounded-lg w-full shadow-md text-white"
    >
      <CheckBox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <Text lineThrough={todo.completed} isDisabled={todo.completed}>
        {todo.title}
      </Text>
      <Button isDisabled={!todo.completed} onClick={() => removeTodo(todo.id)}>
        X
      </Button>
    </motion.div>
  );
};

export default TodoItem;
