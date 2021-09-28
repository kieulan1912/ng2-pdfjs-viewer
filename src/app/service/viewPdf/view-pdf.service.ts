import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { managerFileRouter } from 'src/app/utils/api-router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewPdfService {

  constructor(private httpClient: HttpClient) { }
  getCategoryActionById(id: any): Observable<Blob> {
    const headers = {
      //  'observe': 'response',
      // 'Content-Type': 'application/json',
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ4LXVzZXJOYW1lIjoiYWRtaW4iLCJ4LWZ1bGxOYW1lIjoiUXXhuqNuIHRy4buLIGjhu4cgdGjhu5FuZyAiLCJ4LXVzZXJJZCI6IjY2ODdmZDljLTU0ZDItNDY3NS04NGM0LWEzZjNlZGJmMGI0OCIsIngtYXBwSWQiOiI1MzJkNDk2Zi01NTAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJ4LWV4cCI6IjE2MzA0ODU5ODIyMTMiLCJ4LWlhdCI6IjE2MzAzOTk1ODIyMTMiLCJzLXN1cGVydXNlciI6IkZhbHNlIiwieC1yb2xlIjoiW1wiUVRIVFwiXSIsIngtcmlnaHQiOiJbXSIsImV4cCI6MTYzMDQ2MDc4MiwiaXNzIjoiUy1FUlAiLCJhdWQiOiJTLUVSUCJ9.kGyuNIz7beq5RcQY4iPdd5O5EGbYITqlRLrrdHUZgPY',
      'X-ApplicationId': 'f6982879-8b0f-4005-ae2f-71a033cfa9c2'
    }
    return this.httpClient.get<Blob>(
      environment.BASE_API_URI.FILE_SERVICE_API + managerFileRouter.downloadFile + '/' + id, { headers: headers,  responseType: 'blob' as 'json'}
    );
  }
}
