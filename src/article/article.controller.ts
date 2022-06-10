import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/user/decorators/user.decorator';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { UserEntity } from 'src/user/user.entity';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/createArticle.dto';
import { ArticleResponceInterface } from './types/articleResponse.interface';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @User() curreentUser: UserEntity,
    @Body('article') createArticleDto: CreateArticleDto,
  ): Promise<ArticleResponceInterface> {
    const article = await this.articleService.createArticle(
      curreentUser,
      createArticleDto,
    );
    return this.articleService.buildArticleResponse(article);
  }
}
