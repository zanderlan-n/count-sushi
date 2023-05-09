'use client'
import React, { useState, useEffect, useMemo } from 'react'
import {
  Wrapper,
  Title,
  Button,
  Counter,
  TopButtonsWrapper,
  ResetButton,
  ConfirmationModal,
  ModalTitle,
  ModalButton,
  ModalCancelButton,
  FoodWrapper,
  FoodTypeWrapper,
  NewFoodTypeInput,
  CreateButton,
  RemoveButton,
} from './styles'

function Home() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({})
  const [newFoodTypeName, setNewFoodTypeName] = useState('')

  useEffect(() => {
    const storedCounts = localStorage.getItem('japanese_food_counts')
    if (storedCounts) {
      setCounts(JSON.parse(storedCounts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('japanese_food_counts', JSON.stringify(counts))
  }, [counts])

  const incrementCount = (key: string) => {
    setCounts({ ...counts, [key]: (counts[key] || 0) + 1 })
  }

  const decrementCount = (key: string) => {
    setCounts({ ...counts, [key]: (counts[key] || 0) - 1 })
  }

  const resetCounts = () => {
    setCounts({})
  }

  const createNewFoodType = () => {
    if (!newFoodTypeName) return
    const newKey = newFoodTypeName.toLowerCase().replace(' ', '_')
    setCounts({ ...counts, [newKey]: 0 })
    setNewFoodTypeName('')
  }

  const removeFoodType = (key: string) => {
    const newCounts = { ...counts }
    delete newCounts[key]
    setCounts(newCounts)
  }

  const sortedCounts: any = useMemo(() => {
    const keys = Object.keys(counts).sort()
    return keys.reduce((acc, key) => {
      return { ...acc, [key]: counts[key] }
    }, {})
  }, [counts])

  const [showConfirmation, setShowConfirmation] = useState(false)

  const confirmReset = () => {
    resetCounts()
    setShowConfirmation(false)
  }
  const total = useMemo(() => {
    return Object.values(counts).reduce((acc, val) => acc + val, 0)
  }, [counts])

  return (
    <Wrapper>
      <Title>Sushi Count</Title>
      <TopButtonsWrapper>
        <ResetButton onClick={() => setShowConfirmation(true)}>
          Zerar Contadores
        </ResetButton>
      </TopButtonsWrapper>
      <FoodTypeWrapper>
        <NewFoodTypeInput
          type="text"
          placeholder="Nova comida"
          value={newFoodTypeName}
          onChange={e => setNewFoodTypeName(e.target.value)}
        />
        <CreateButton onClick={createNewFoodType}>Adicionar</CreateButton>
      </FoodTypeWrapper>
      <FoodWrapper>
        {Object.keys(sortedCounts).map(key => (
          <div key={key}>
            <Button onClick={() => incrementCount(key)}>
              {key
                .split('_')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ')}
              <Counter>{sortedCounts[key]}</Counter>
            </Button>
            <Button onClick={() => decrementCount(key)} disabled={!counts[key]}>
              -
            </Button>
            <RemoveButton onClick={() => removeFoodType(key)}>
              Remover
            </RemoveButton>
          </div>
        ))}
      </FoodWrapper>
      <div style={{ marginTop: '20px' }}>Total: {total}</div>
      {showConfirmation && (
        <ConfirmationModal>
          <div>
            <ModalTitle>Deseja realmente zerar todos os contadores?</ModalTitle>
            <ModalButton onClick={confirmReset}>Sim</ModalButton>
            <ModalCancelButton onClick={() => setShowConfirmation(false)}>
              Cancelar
            </ModalCancelButton>
          </div>
        </ConfirmationModal>
      )}
    </Wrapper>
  )
}

export default Home
