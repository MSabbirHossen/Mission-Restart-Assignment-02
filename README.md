## 📚 Q&A
### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components more readable and intuitive.

**Why JSX is used:**

- **Readability**: HTML-like syntax is easier to understand than function calls
- **Familiarity**: Developers familiar with HTML can work with React more easily
- **Expressiveness**: You can embed JavaScript expressions within HTML markup
- **Performance**: Babel transpiles JSX to efficient JavaScript function calls

**Example in our project:**

```jsx
<div className="bg-white rounded-lg p-6">
  <h3 className="font-semibold text-gray-900">{ticket.title}</h3>
  <p className="text-gray-600">{ticket.description}</p>
</div>
```

### 2. What is the difference between State and Props?

**State:**

- **Owned by component**: Each component owns its own state
- **Can be changed**: State can be updated using setter functions
- **Local data**: Used for data that changes over time within a component
- **Re-renders**: Component re-renders when state changes

**Props:**

- **Passed from parent**: Props are passed from parent to child components
- **Read-only**: Props cannot be directly modified by the receiving component
- **Data flow**: Enables unidirectional data flow (parent to child)
- **Configuration**: Used to configure and pass data to child components

**Comparison Table:**

| Feature        | State                | Props                                   |
| -------------- | -------------------- | --------------------------------------- |
| Ownership      | Component itself     | Parent component                        |
| Mutability     | Can be changed       | Read-only                               |
| Default values | Set in component     | Passed when component rendered          |
| Changes        | Re-renders component | Parent must pass new value to re-render |

**Example in our project:**

```jsx
// State - in App.jsx
const [selectedTickets, setSelectedTickets] = useState([]);
const [inProgressCount, setInProgressCount] = useState(0);

// Props - passed to Banner component
<Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />;

// Banner component receives props
function Banner({ inProgressCount, resolvedCount }) {
  return <p className="text-5xl font-bold">{inProgressCount}</p>;
}
```

### 3. What is the useState hook, and how does it work?

**useState** is a React Hook that allows functional components to have state. Before React 16.8, only class components could have state.

**Syntax:**

```javascript
const [state, setState] = useState(initialValue);
```

**How it works:**

- **First element** (`state`): Current state value
- **Second element** (`setState`): Function to update state
- **initialValue**: Starting value of the state
- When `setState` is called, React schedules a re-render with the new state

**Key Points:**

- Multiple `useState` calls can be used in a single component
- State updates are asynchronous
- Never mutate state directly; always use the setter function
- State created in one component is not automatically available in other components

**Example in our project:**

```jsx
const [availableTickets, setAvailableTickets] = useState(ticketsData);
const [selectedTickets, setSelectedTickets] = useState([]);
const [resolvedCount, setResolvedCount] = useState(0);

// Using state
console.log(availableTickets); // Current value

// Updating state
setResolvedCount(resolvedCount + 1); // New state

// State in JSX
<p className="text-5xl font-bold">{resolvedCount}</p>;
```

### 4. How can you share state between components in React?

There are several ways to share state between components:

**a) Lifting State Up (Props Drilling)**

- Move state to a parent component
- Pass data to child components via props
- Pass callbacks to child components to update parent state
- **Best for**: Simple component hierarchies

**b) Context API**

- Create a context to hold shared state
- Uselessly wrap components with `Provider`
- Use `useContext` hook to access state in child components
- **Best for**: Global state like theme, authentication

**c) State Management Libraries**

- Redux, Zustand, Recoil
- Centralized state management
- **Best for**: Complex applications with many shared states

**Example in our project (Lifting State Up):**

```jsx
// App.jsx - Parent component
const [selectedTickets, setSelectedTickets] = useState([]);
const [inProgressCount, setInProgressCount] = useState(0);

// Pass to children
<MainSection tickets={availableTickets} onCardClick={handleCardClick} />
<Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

// Child component receives data and functions
function MainSection({ tickets, onCardClick }) {
  return (
    <TicketCard
      ticket={ticket}
      onCardClick={onCardClick}
    />
  );
}
```

### 5. How is event handling done in React?

**Event Handling in React:**

- Events are synthetic events wrapped by React
- Event names are camelCased (e.g., `onClick`, `onChange`, `onSubmit`)
- Event handlers are typically passed as functions
- `this` binding is handled automatically in functional components

**Common Events:**

- `onClick` - Click events
- `onChange` - Input/Select changes
- `onSubmit` - Form submission
- `onFocus/onBlur` - Input focus
- `onMouseEnter/onMouseLeave` - Mouse hovering
- `onKeyUp/onKeyDown` - Keyboard events

**Example in our project:**

```jsx
// Click event handler
<button onClick={() => handleComplete(ticket)}>
  Complete
</button>

// Cards with click handling
<div onClick={() => onCardClick(ticket)}>
  {ticket.title}
</div>

// Event object access
const handleCardClick = (ticket) => {
  // Access ticket data
  setSelectedTickets([...selectedTickets, ticket]);
};

// Preventing default behavior
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};
```