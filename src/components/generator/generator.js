import React from 'react'

import { Button } from 'ui/button'
import { Input } from 'ui/input'
import { Select } from 'ui/select'
import { Checkbox } from 'ui/checkbox'

import styles from './generator.module.css'

function Generator() {
  const [result, setResult] = React.useState('')
  const [passwordLength, setPasswordLength] = React.useState(12)
  const [isSymbolsUsed, setIsSymbolUsed] = React.useState(false)
  const [isPasswordCopied, setIsPasswordCopied] = React.useState(false)

  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ'
  const passwordLengthValues = [12, 13, 14, 15, 16]
  const symbols = '!@#$%^&()_+?><:{}[]'

  function handlePasswordGenerator() {
    if (isSymbolsUsed) {
      chars += symbols
    }
    let result = ''
    for (let i = 0; i < passwordLength; i += 1) {
      const randomNumber = Math.floor(Math.random() * chars.length)
      result += chars.substring(randomNumber, randomNumber + 1)
    }
    setResult(result)
  }

  function handleSymbolsUsed() {
    setIsSymbolUsed(!isSymbolsUsed)
  }

  function handleBlur(event) {
    setPasswordLength(event.target.value)
  }

  function handlePasswordCopy() {
    if (result) {
      let timerId = ''
      navigator.clipboard.writeText(result).then(() => {
        setIsPasswordCopied(true)
        timerId = setTimeout(() => {
          setIsPasswordCopied(false)
          clearTimeout(timerId)
        }, 2000)
      })
    }
  }

  return (
    <div className={styles['root']}>
      <h1 className={styles['title']}>Password generator</h1>
      <div className={styles['result']}>
        <Input type="text" readonly={true} defaultValue={result}></Input>
        <button className={styles['copy']} onClick={handlePasswordCopy}></button>
        {isPasswordCopied && <span className={styles['copied']}>Cкопировано!</span>}
      </div>
      <div className={styles['option']}>
        <span className={styles['option-text']}>Длина пароля</span>
        <Select options={passwordLengthValues} onBlur={handleBlur}></Select>
      </div>
      <div className={styles['option']}>
        <label className={styles['option-label']} htmlFor="symbols">
          Использовать спецсимволы
        </label>
        <Checkbox
          defaultChecked={false}
          name="useSymbols"
          id="symbols"
          onChange={handleSymbolsUsed}></Checkbox>
      </div>
      <Button type="button" onClick={handlePasswordGenerator}>
        Сгенерировать пароль
      </Button>
    </div>
  )
}

export { Generator }
