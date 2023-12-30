import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, DocumentReference, Firestore, QuerySnapshot, addDoc, collection, doc, getDocs } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { SELECTED_NUMBERS, USERS } from 'src/app/constants/collection-docs-firebase';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { LoginService } from 'src/app/services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class DataSaveMoneyService {
  generatedNumbers = new Set<number>();
  dataRandomNumber = new Set<DataRandomNumber>();

  randomNumber!: number;

  reloadData$: Subject<void> = new Subject();

  constructor(
    private firestore: Firestore,
    private readonly _loginService: LoginService
  ) {
    this.getSelectedNumbers();
  }

  getSelectedNumbers(): Promise<QuerySnapshot<DocumentData>> {
    return getDocs(this._getSelectedNumbersCollection());
  }

  saveRandomNumber(data: DataRandomNumber): Promise<DocumentReference<DocumentData>> {
    // Agregar un nuevo documento con el número seleccionado
    return addDoc(this._getSelectedNumbersCollection(), data);
  }

  private _getSelectedNumbersCollection(): CollectionReference<DocumentData> {
    const userDocRef = this._getUserCollection();

    // Obtener la subcolección 'selectedNumbers' del usuario
    const selectedNumbersCollection = collection(userDocRef, SELECTED_NUMBERS);
    return selectedNumbersCollection;
  }

  private _getUserCollection(): DocumentReference<DocumentData> {
    const uUid = this._loginService.user.user.uid;

    // Obtener la selección 'users' 
    const userCollection = collection(this.firestore, USERS);
    return doc(userCollection, uUid);
  }

}
