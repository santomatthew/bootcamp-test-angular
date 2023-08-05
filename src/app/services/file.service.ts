import { Injectable } from "@angular/core";
import { FileUpload } from "primeng/fileupload";

@Injectable({
    providedIn: 'root'
})
export class FileService {
    fileUpload(event: any, callback: (ext: string, fileName: string) => void) {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });

        for (let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)

                callback(resultExtension, resultBase64)
                console.log(resultBase64)
                console.log(resultExtension)
            })
        }
    }

} 