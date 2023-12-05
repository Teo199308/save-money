import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, DocumentReference, Firestore, QuerySnapshot, addDoc, collection, doc, getDocs } from '@angular/fire/firestore';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { LoginService } from 'src/app/services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class DataSaveMoneyService {
  generatedNumbers = new Set<DataRandomNumber>();

  randomNumber!: number;

  constructor(
    private firestore: Firestore,
    private readonly _loginService: LoginService
  ) {
    this.getSelectedNumbers();
  }

  getSelectedNumbers(): Promise<QuerySnapshot<DocumentData>> {
    return getDocs(this._getSelectedNumbersCollection());
  }

  saveRandomNumber(data: DataRandomNumber) {
    // Agregar un nuevo documento con el número seleccionado
    addDoc(this._getSelectedNumbersCollection(), data)
      .then((resp) => {
        this.getSelectedNumbers();
      });
  }

  private _getUserCollection(): DocumentReference<DocumentData> {
    const uUid = this._loginService.user.user.uid;

    // OBtener la selección 'users' 
    const userCollection = collection(this.firestore, 'users');
    return doc(userCollection, uUid);
  }

  private _getSelectedNumbersCollection(): CollectionReference<DocumentData> {
    const userDocRef = this._getUserCollection();

    // Obtener la subcolección 'selectedNumbers' del usuario
    const selectedNumbersCollection = collection(userDocRef, 'selectedNumbers');
    return selectedNumbersCollection;
  }

}
