import { styled } from 'styled-components'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`

const Button = styled.button`
  background-color: #7580b4;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px;
  margin-right: 10px;
`

const Counter = styled.span`
  font-size: 18px;
  margin-left: 10px;
`

const TopButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const ResetButton = styled(Button)`
  background-color: #dc143c;
  color: #fff;
`

const UndoButton = styled(Button)`
  background-color: #4169e1;
  color: #fff;
`

const ConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
  }
`

const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

const ModalButton = styled(Button)`
  background-color: #dc143c;
  color: #fff;
`

const ModalCancelButton = styled(Button)`
  background-color: #4169e1;
  color: #fff;
`
const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const FoodTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const NewFoodTypeInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`

const CreateButton = styled(Button)`
  background-color: #008000;
  margin-right: 10px;
`

const RemoveButton = styled(Button)`
  background-color: #dc143c;
  margin-right: 10px;
`

export {
  Wrapper,
  Title,
  Button,
  Counter,
  TopButtonsWrapper,
  ResetButton,
  UndoButton,
  ConfirmationModal,
  ModalTitle,
  ModalButton,
  ModalCancelButton,
  FoodWrapper,
  FoodTypeWrapper,
  NewFoodTypeInput,
  CreateButton,
  RemoveButton,
}
