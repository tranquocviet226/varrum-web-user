import { Action } from 'redux'
import { EPhotoActions } from './EPhotoActions'

export interface IUploadPhotoAction extends Action {
  type: EPhotoActions.UPLOAD
  file: FormData
}

export type PhotoTypes = IUploadPhotoAction
