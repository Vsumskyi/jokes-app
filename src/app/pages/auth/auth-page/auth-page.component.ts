import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { JokeService } from 'src/app/services/joke.service';
import { AuthPropertiesEnum } from 'src/app/enums/enums';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public authPropertiesEnum = AuthPropertiesEnum;

  constructor(
    public authService: AuthService,
    private jokesDataService: JokesDataService,
    private jokeService: JokeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnDestroy(): void {
    if (this.authService.authenticated) {
      this.jokesDataService.getDataFromDb().subscribe(data => {
        this.jokeService.updateJokes(data);
      });
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      auth: [this.authPropertiesEnum['Sign in']]
    });
  }
}
