import { FC } from 'react';
import { User } from './types/user';

type Props = {
        // userプロパティは、先ほどインポートしたUser型を持つ
        user: User;
}

export const UserProfile: FC<Props> = (props) => {
        // userプロパティは、先ほどインポートしたUser型を持つ
        const { user } = props;
        return (
                <dl>
                        <dt>名前</dt>
                        <dd>{user.name}</dd>
                        <dt>趣味</dt>

                        {/* ? オプショナルチェイニング
                        オブジェクトのプロパティにアクセスする際に、
                        そのプロパティが存在しない場合でもエラーを起こさずにundefinedを返すことができる */}
                        <dd>{user.hobbies?.join(" / ")}</dd>
                </dl>
        );
};