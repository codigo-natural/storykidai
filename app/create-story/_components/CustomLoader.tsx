'use client'

import React, { useEffect } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";
import { Loader } from './Loader';

export function CustomLoader({ isLoading }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div>
      {isLoading && <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <ModalBody className='p-10 flex w-full content-center items-center'>
              <Loader />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>}
    </div>
  )
}

